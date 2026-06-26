# Solution 03: Filter candidates

Keep this as one derived value from the source data and the current controls. The key detail is that every predicate should be optional unless its matching control is active.

## Example solution

```tsx
const normalizedQuery = query.trim().toLowerCase()

const visibleCandidates = candidates.filter((candidate) => {
  const searchableText = [
    candidate.name,
    candidate.location,
    candidate.role,
    ...candidate.skills,
  ].join(' ').toLowerCase()

  const matchesQuery =
    normalizedQuery.length === 0 || searchableText.includes(normalizedQuery)
  const matchesRole = role === 'all' || candidate.role === role
  const matchesStage = stage === 'all' || candidate.stage === stage
  const matchesRemote = !remoteOnly || candidate.availableRemote

  return matchesQuery && matchesRole && matchesStage && matchesRemote
})
```

This keeps the original array order because it only filters. It also avoids mutating `candidates` because `filter` returns a new array and the callback does not alter candidate objects.

## Follow-up discussion

`useMemo` can be useful when the list is large or the filtering work is expensive. For this exercise, deriving the list during render is simpler and easy to reason about.
