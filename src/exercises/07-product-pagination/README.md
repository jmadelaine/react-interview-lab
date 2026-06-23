# Exercise 07: Paginate a product list

**Suggested time:** 30 minutes

**File to edit:** `ProductPaginationExercise.tsx`

**Do not edit:** `data.ts`

## Interviewer brief

> The product catalogue contains 14 products and should show six at a time. The card and pagination markup are complete, but the page calculations and navigation handler are unfinished. Implement client-side pagination without changing the source data.

## Requirements

1. Calculate the number of pages from the product count and `pageSize`.
2. Calculate the first array index for the current page.
3. Use `slice` to create `visibleProducts` for the current page.
4. Implement `goToPage` so it updates `currentPage`.
5. Keep page numbers between `1` and `totalPages`, even if `goToPage` receives an invalid number.
6. Preserve the supplied previous/next disabled behavior and result summary.

## Acceptance checks

- The catalogue displays three page buttons.
- Page 1 displays products 1–6 and says “Showing 1–6 of 14”.
- Page 2 displays products 7–12 and says “Showing 7–12 of 14”.
- Page 3 displays products 13–14 and says “Showing 13–14 of 14”.
- Previous is disabled on page 1 and Next is disabled on page 3.
- The imported `products` array is not mutated.

## Out of scope

Do not add filtering, sorting, an API request, or a pagination package. The data is intentionally small and local.

## If you finish early

Explain what should happen to the current page if filtering were later added and reduced the number of pages.
