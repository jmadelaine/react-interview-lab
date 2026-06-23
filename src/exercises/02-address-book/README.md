# Exercise 02: Find a contact

**Suggested time:** 30 minutes

**File to edit:** `AddressBookExercise.tsx`

**Do not edit:** `data.ts`

## Interviewer brief

> This address book renders a static contact list. The search input and sort menu already update React state, but they do not affect the visible contacts. Implement the derived list. Please explain how you avoid changing the source data.

## Requirements

Replace the `visibleContacts` starter assignment so that:

1. Search is case-insensitive.
2. Search matches partial text in `name`, `email`, `company`, or `city`.
3. Leading and trailing whitespace in the query is ignored.
4. `Name A–Z` and `Name Z–A` sort by contact name.
5. `Recently contacted` shows newest `lastContacted` first.
6. Filtering and sorting work together.
7. The imported `contacts` array is never mutated.

The result count and empty state are already connected to `visibleContacts`.

## Acceptance checks

- Searching `orbit` shows Aiko Tanaka and Farah Nasser.
- Searching `  TOKYO ` shows Aiko Tanaka.
- Choosing `Name Z–A` puts Hana Kim before George Wu.
- Choosing `Recently contacted` puts Camila Rocha first when the query is empty.
- Clearing the query restores all eight contacts.

## Out of scope

Do not add an API, debounce, pagination, or fuzzy-search dependency. A simple in-memory solution is expected.

## If you finish early

Discuss when `useMemo` would be useful and whether it is necessary for eight contacts.
