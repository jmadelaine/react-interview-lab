# Exercise 03: Build an expense report

**Suggested time:** 30 minutes

**File to edit:** `report.ts`

**Reference data:** `data.ts`

## Interviewer brief

> The API team has provided raw transaction data, and the UI needs a report containing only approved expenses. Complete the pure `buildExpenseReport` function. For this exercise, use `filter`, `map`, and `reduce` so we can discuss collection transformations.

## Requirements

Return an object with three fields:

1. `expenses`: only transactions whose status is `approved` and kind is `expense`, mapped to `DisplayExpense`.
   - Convert `amountCents` to dollar units in `amount`.
   - Convert `date` to a short label such as `Jun 3` in `dateLabel`.
   - Preserve `id`, `merchant`, and `category`.
2. `totalsByCategory`: the sum in dollar units for each category present in `expenses`.
3. `total`: the sum in dollar units of all included expenses.

Pending and declined transactions are excluded. Refunds are also excluded; do not subtract them.

## Acceptance checks

- The report contains six expenses.
- Travel totals `$770.00`.
- Meals total `$54.50`.
- Software totals `$56.00`.
- Office is absent from `totalsByCategory` because its only transaction is pending.
- The grand total is `$880.50`.
- The input array and its objects remain unchanged.

## Out of scope

Do not change the data model or UI. Currency formatting is already handled by the page.

## If you finish early

Discuss whether you would calculate category totals and the grand total in one reduction or separate reductions, and why.
