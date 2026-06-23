# Exercise 01: Create a teammate

**Suggested time:** 30 minutes

**File to edit:** `CreateUserExercise.tsx`

**Do not edit:** `api.ts`

## Interviewer brief

> You have joined a team building a workspace administration screen. The form UI and a mock `createUser` API already exist, but the submit handler is unfinished. Please complete the handler so an administrator can add a teammate. Talk through your decisions as you work. You may use the browser and inspect any project file.

## Requirements

Complete `handleSubmit` so that it:

1. Reads `name`, `email`, and `role` from the submitted form.
2. Trims text input and rejects the submission if any field is empty.
3. Calls the existing `createUser` function with a correctly typed payload.
4. Disables the submit button and shows its loading label while the request is pending.
5. Shows the created teammate when the request succeeds and resets the form.
6. Shows the API's error message when the request fails.
7. Always restores the form from its loading state after the request settles.

Use `jane@sample.dev` to test the error path. Any other valid email succeeds after a short delay.

## Acceptance checks

- Submitting blank or whitespace-only data does not call the API and shows a useful message.
- A valid submission shows a loading state followed by a success message.
- The form can be used again after either success or failure.
- The existing page layout and mock API behavior are preserved.
- TypeScript passes without using `any`.

## Out of scope

Do not add a form library, change the mock API, or build field-by-field validation. A single validation message is enough.

## If you finish early

Explain how you would prevent a double submission, move focus after an error, or test this component.
