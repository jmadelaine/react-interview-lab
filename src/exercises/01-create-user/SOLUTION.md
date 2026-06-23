# Solution 01: Create a teammate

The important behaviors are reading the form at submit time, representing the request lifecycle, and using `try/catch/finally` so loading state cannot get stuck.

## Example solution

Import the API and its input type:

```tsx
import { createUser, type CreateUserInput, type User } from './api'
```

Then implement the handler:

```tsx
async function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault()
  setError('')
  setCreatedUser(null)

  const form = event.currentTarget
  const formData = new FormData(form)
  const input: CreateUserInput = {
    name: String(formData.get('name') ?? '').trim(),
    email: String(formData.get('email') ?? '').trim(),
    role: String(formData.get('role') ?? '') as CreateUserInput['role'],
  }

  if (!input.name || !input.email || !input.role) {
    setError('Complete all fields before adding a teammate.')
    return
  }

  setIsSubmitting(true)
  try {
    const user = await createUser(input)
    setCreatedUser(user)
    form.reset()
  } catch (error) {
    setError(error instanceof Error ? error.message : 'Could not add this teammate.')
  } finally {
    setIsSubmitting(false)
  }
}
```

Capturing `event.currentTarget` before `await` makes the form reference explicit and avoids relying on the event after asynchronous work. `finally` is the key reliability detail.

## Other valid approaches

- Use controlled inputs with one state value per field. This makes field-level validation straightforward, but adds more code for this task.
- Use a typed form-element interface and read `form.elements`. This avoids `FormData` casts but requires additional TypeScript declarations.
- Use native `required` attributes for empty-field validation. This is valid if the interviewer accepts browser validation, although it does not exercise React error state as directly.

## Follow-up discussion

A production version could validate email structure, preserve values after API failure, focus the alert, use an `aria-live` region for request status, and protect the endpoint against duplicate submissions server-side.
