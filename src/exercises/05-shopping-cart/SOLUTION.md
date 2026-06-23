# Solution 05: Repair a shopping cart

The cart items are source state. Counts and prices are derived data, so calculate them from `items` rather than synchronizing additional state variables.

## Example solution

```tsx
function updateQuantity(id: string, change: number) {
  setItems((currentItems) =>
    currentItems.map((item) => {
      if (item.id !== id) return item

      const nextQuantity = Math.min(
        item.inventory,
        Math.max(1, item.quantity + change),
      )

      return { ...item, quantity: nextQuantity }
    }),
  )
}

function removeItem(id: string) {
  setItems((currentItems) => currentItems.filter((item) => item.id !== id))
}

const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)
const subtotal = items.reduce(
  (sum, item) => sum + item.unitPrice * item.quantity,
  0,
)
const shipping = items.length === 0 || subtotal >= 100 ? 0 : 8
const total = subtotal + shipping
```

The functional `setItems` form is robust when updates are queued or batched. `map` creates a new array and the spread creates a new object only for the changed item. Unchanged items preserve their references.

## Other valid approaches

- Disable decrement and increment buttons at their limits in addition to enforcing limits in the state update. The update must still enforce the invariant because UI controls are not a sufficient data boundary.
- Calculate `itemCount` and `subtotal` in one reduction:

```tsx
const summary = items.reduce(
  (result, item) => ({
    itemCount: result.itemCount + item.quantity,
    subtotal: result.subtotal + item.unitPrice * item.quantity,
  }),
  { itemCount: 0, subtotal: 0 },
)
```

- Wrap the reductions in `useMemo`. This is correct but unnecessary for three inexpensive rows. Do not store derived totals in state; that allows item state and total state to disagree.

## Follow-up discussion

A production commerce system should calculate authoritative prices, discounts, tax, and inventory on the server. Client-side limits improve the interface but cannot enforce real inventory or pricing rules.
