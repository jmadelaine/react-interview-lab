# Solution 02: Find a contact

The list is derived from props and local controls, so it should not be stored in another state variable. Filter first, then sort a newly created array.

## Example solution

```tsx
const normalizedQuery = query.trim().toLocaleLowerCase()

const visibleContacts = contacts
  .filter((contact) => {
    const searchableText = [
      contact.name,
      contact.email,
      contact.company,
      contact.city,
    ].join(' ').toLocaleLowerCase()

    return searchableText.includes(normalizedQuery)
  })
  .sort((a, b) => {
    if (sortBy === 'recent') {
      return new Date(b.lastContacted).getTime() - new Date(a.lastContacted).getTime()
    }

    const direction = sortBy === 'name-asc' ? 1 : -1
    return a.name.localeCompare(b.name) * direction
  })
```

`filter` returns a new array, so the following in-place `sort` does not mutate the imported `contacts` array. An explicit `[...contacts]` copy before sorting would also be correct.

## Memoized alternative

```tsx
const visibleContacts = useMemo(() => {
  // same filter and sort logic
}, [query, sortBy])
```

`useMemo` is reasonable if the collection or transformation is expensive. It is not required here; adding it to an eight-row list is mainly a design choice, not a meaningful optimization.

## Other valid approaches

- Check every field with separate `includes` expressions instead of building `searchableText`.
- Use `toSorted` after filtering in environments that support ES2023 arrays.
- Compare ISO date strings directly because these dates use the sortable `YYYY-MM-DD` format.

Avoid putting `visibleContacts` in state and synchronizing it in an effect. That creates redundant state and more opportunities for stale results.
