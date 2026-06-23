# Exercise 05: Repair a shopping cart

**Suggested time:** 30 minutes

**File to edit:** `ShoppingCartExercise.tsx`

**Reference data:** `data.ts`

## Interviewer brief

> This shopping cart renders its initial products, but the quantity buttons, remove action, item count, and order summary are unfinished. Implement those behaviors with immutable React state updates and derived totals.

## Requirements

1. `updateQuantity(id, change)` updates only the matching item without mutating existing state.
2. Quantity cannot go below 1 or above that item's `inventory`.
3. `removeItem(id)` removes the matching line.
4. `itemCount` is the sum of all quantities, not the number of product rows.
5. `subtotal` is the sum of `unitPrice × quantity` for all items.
6. Shipping costs `$8` when the subtotal is below `$100` and is free at `$100` or more.
7. An empty cart has a subtotal, shipping, and total of `$0`.
8. `total` is subtotal plus shipping.

All currency values in this exercise are dollar amounts rather than cents.

## Acceptance checks

- The initial count is 4, subtotal is `$128.00`, shipping is free, and total is `$128.00`.
- Decreasing the notebook changes its quantity from 2 to 1.
- The desk pad cannot exceed its inventory of 3.
- The pen set cannot increase because its inventory is 1.
- Repeated decrement clicks never reduce a quantity below 1.
- Removing every row shows the empty state and a `$0.00` total.

## Out of scope

Do not add persistence, a backend, promotional codes, taxes, or new components. Keep the existing visual design.

## If you finish early

Discuss the tradeoffs between calculating totals on every render, memoizing them, and storing them in state.
