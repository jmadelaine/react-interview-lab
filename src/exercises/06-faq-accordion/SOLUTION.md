# Solution 06: Build an FAQ accordion

The component only needs to remember the ID of the open item. `null` represents the valid state where every answer is closed.

## Example solution

```tsx
function toggleItem(id: string) {
  setOpenItemId((currentId) => currentId === id ? null : id)
}
```

Using the functional setter makes the update depend explicitly on the previous value:

- If the same item is already open, store `null` to close it.
- Otherwise, store the new ID. Replacing the old ID automatically closes the previous answer.

The supplied rendering code derives `isOpen`, `aria-expanded`, the icon, and the visible answer from this single state value.

## Other valid approaches

This direct version is also correct for a click handler:

```tsx
function toggleItem(id: string) {
  setOpenItemId(openItemId === id ? null : id)
}
```

If multiple items could stay open, state could instead contain a `Set<string>` or array of open IDs. That would add complexity that the current requirement does not need.

Avoid storing a separate boolean on every FAQ item. The FAQ data is static input, and copying it into state creates unnecessary synchronization work.
