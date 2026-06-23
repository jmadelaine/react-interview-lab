# Solution 04: Search support issues

This task tests ownership of asynchronous work. Each effect run should own its timer and request, then cancel both in cleanup.

## AbortController solution

Update the React and API imports and make the starter state setters available:

```tsx
import { useEffect, useState } from 'react'
import { searchIssues, type IssueStatus, type SupportIssue } from './api'

const [results, setResults] = useState<SupportIssue[]>([])
const [isLoading, setIsLoading] = useState(false)
const [error, setError] = useState('')
```

Then add the effect:

```tsx
useEffect(() => {
  const controller = new AbortController()

  const timerId = window.setTimeout(async () => {
    setIsLoading(true)
    setError('')

    try {
      const issues = await searchIssues({
        query,
        status,
        signal: controller.signal,
      })
      setResults(issues)
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') return
      setResults([])
      setError(error instanceof Error ? error.message : 'Could not load issues.')
    } finally {
      if (!controller.signal.aborted) setIsLoading(false)
    }
  }, 300)

  return () => {
    window.clearTimeout(timerId)
    controller.abort()
  }
}, [query, status])
```

The cleanup handles two phases: it clears the debounce if the request has not started and aborts the request if it has. Avoiding the loading update after abort also prevents an older request from changing the current request's UI state.

## Ignore-flag alternative

If an API does not accept `AbortSignal`, an effect-local flag can ignore stale work:

```tsx
useEffect(() => {
  let ignore = false

  const timerId = window.setTimeout(async () => {
    setIsLoading(true)
    setError('')
    try {
      const issues = await searchIssues({ query, status })
      if (!ignore) setResults(issues)
    } catch (error) {
      if (!ignore) setError(error instanceof Error ? error.message : 'Could not load issues.')
    } finally {
      if (!ignore) setIsLoading(false)
    }
  }, 300)

  return () => {
    ignore = true
    window.clearTimeout(timerId)
  }
}, [query, status])
```

This protects React state but does not stop the underlying network work. Abort is preferable when supported.

## Follow-up discussion

In production, a query library can provide request caching, retry policy, deduplication, and stale-data handling. The core lifecycle reasoning is still necessary. React Strict Mode deliberately reruns effect setup and cleanup in development; a correct cleanup makes that safe.
