# Exercise 03: Filter candidates

**Suggested time:** 30 minutes

**File to edit:** `CandidateFilterExercise.tsx`

**Do not edit:** `data.ts`

## Interviewer brief

> This recruiting screen renders a static candidate pipeline. The search box, role menu, stage menu, and remote-only checkbox already update React state, but the list ignores those controls. Implement the derived list. This exercise is intentionally filtering-only; do not add sorting.

## Requirements

Replace the `visibleCandidates` starter assignment so that:

1. Search is case-insensitive.
2. Search matches partial text in `name`, `location`, `role`, or any item in `skills`.
3. Leading and trailing whitespace in the query is ignored.
4. The role filter includes only candidates with the selected role unless `All roles` is selected.
5. The stage filter includes only candidates with the selected stage unless `All stages` is selected.
6. `Remote only` includes only candidates whose `availableRemote` value is `true`.
7. All active filters work together.
8. The imported `candidates` array is never mutated.

## Acceptance checks

- Searching `react` shows Mina Park and Rafael Costa.
- Searching `  tokyo ` shows Mina Park, Aiko Tanaka, and Sara Ahmed.
- Choosing `Frontend` shows Mina Park and Rafael Costa.
- Choosing `Offer` shows Aiko Tanaka and Nora Ibrahim.
- Combining `Backend`, `Offer`, and `Remote only` leaves Nora Ibrahim.
- Clearing all filters restores all eight candidates in their original order.

## Out of scope

Do not add sorting, pagination, an API, debounce, or a fuzzy-search dependency. A simple in-memory filter is expected.

## If you finish early

Discuss when this derived value should be wrapped in `useMemo`, and why it is not required for eight local records.
