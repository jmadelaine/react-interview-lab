# Solution 07: Paginate a product list

Pagination uses zero-based array indexes even though the interface uses page numbers starting at one. Subtracting one before multiplying performs that conversion.

## Example solution

```tsx
const totalPages = Math.ceil(products.length / pageSize)
const startIndex = (currentPage - 1) * pageSize
const visibleProducts = products.slice(startIndex, startIndex + pageSize)

function goToPage(page: number) {
  const safePage = Math.min(totalPages, Math.max(1, page))
  setCurrentPage(safePage)
}
```

`Math.ceil` creates a final partial page for the remaining two products. `slice` returns a new array, does not mutate `products`, and safely stops at the end of the array.

Clamping in `goToPage` protects the state even when the caller requests page `0` or `4`. Disabled buttons improve the interface, but the state update still enforces its own boundary.

## Other valid approaches

The navigation handler can use a functional update:

```tsx
function goToPage(page: number) {
  setCurrentPage(() => Math.min(totalPages, Math.max(1, page)))
}
```

For data loaded from a server, the current page would usually be sent as a request parameter rather than slicing the complete collection in the browser. That is not needed for this exercise.

Avoid storing `visibleProducts` in state. It is fully determined by `products`, `currentPage`, and `pageSize`, so it is derived data.
