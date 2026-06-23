# Exercise 04: Search support issues

**Suggested time:** 30 minutes

**File to edit:** `IssueSearchExercise.tsx`

**Do not edit:** `api.ts`

## Interviewer brief

> The support issue search UI is complete, and the asynchronous `searchIssues` API is already implemented. Connect the controls to that API. Product has requested a short debounce, useful request states, and protection against older requests replacing newer results.

## Requirements

Update the component so that it:

1. Calls `searchIssues` whenever `query` or `status` changes, including on initial render.
2. Waits 300 ms after the last change before starting a request.
3. Shows the existing loading state while a request is active.
4. Stores and displays returned issues.
5. Clears an old error before a new request and displays a useful message if the new request fails.
6. Prevents a stale response from replacing results for newer search criteria.
7. Cleans up its timer and pending request when dependencies change or the component unmounts.

The mock API accepts an optional `AbortSignal`. Search for `offline` to simulate an error. Short queries deliberately respond more slowly so race conditions can be reproduced.

## Acceptance checks

- The initial view eventually displays all seven issues.
- Typing several characters quickly produces one request after the user pauses.
- Searching `export` returns the two matching export issues.
- Choosing `Open` while searching `export` leaves one result.
- Searching `offline` displays the API error and exits loading state.
- Quickly changing a short query to a longer query never shows the older results last.

## Out of scope

Do not modify the API, add a data-fetching library, add pagination, or synchronize criteria with the URL.

## If you finish early

Explain how React Strict Mode affects effects in development and why cleanup matters.
