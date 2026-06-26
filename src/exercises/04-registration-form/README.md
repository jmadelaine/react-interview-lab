# Exercise 04: Wire a registration form

**Suggested time:** 30 minutes

**File to edit:** `RegistrationFormExercise.tsx`

## Interviewer brief

> The workshop registration screen has state hooks and markup, but the form controls are not connected to React state and the submit handler is unfinished. Wire the fields to state, then write the `handleSubmit` function so submitted registrations appear in the roster.

## Requirements

Update the component so that it:

1. Makes every field controlled by the existing state hooks: `name`, `email`, `track`, `notes`, and `wantsUpdates`.
2. Updates the matching state value as the user edits each input.
3. Prevents the browser's default form submission.
4. Trims `name` and `email` before validation and saving.
5. Shows a useful error and does not add a registration if `name`, `email`, or `track` is empty.
6. Adds a new `Registration` object to `registrations` when the form is valid.
7. Preserves previously submitted registrations.
8. Clears the form and any old error after a successful submission.

## Acceptance checks

- Typing in each field updates its matching state value.
- Submitting a blank form shows an error and does not add a roster item.
- Submitting `Jordan Lee`, `jordan@company.com`, and `Frontend systems` adds Jordan to the roster.
- The notes field is optional.
- Checking `Send product updates` stores `wantsUpdates: true`.
- Submitting a second attendee keeps the first attendee visible.
- After a successful submit, every form field resets to its initial value.

## Out of scope

Do not add an API, a form library, async loading state, field-by-field validation, or email format validation. A single validation message is enough.

## If you finish early

Discuss whether you prefer separate state hooks or one object state for this form, and what tradeoffs would change as the form grows.
