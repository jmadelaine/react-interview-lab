# Solution 03: Build an expense report

A clear pipeline is more valuable than compressing all work into one expression. This version gives each array method one job.

## Example solution

```ts
export function buildExpenseReport(transactions: Transaction[]): ExpenseReport {
  const expenses = transactions
    .filter(({ status, kind }) => status === 'approved' && kind === 'expense')
    .map(({ id, merchant, category, amountCents, date }) => ({
      id,
      merchant,
      category,
      amount: amountCents / 100,
      dateLabel: new Intl.DateTimeFormat('en', {
        month: 'short',
        day: 'numeric',
        timeZone: 'UTC',
      }).format(new Date(date)),
    }))

  const totalsByCategory = expenses.reduce<ExpenseReport['totalsByCategory']>(
    (totals, expense) => ({
      ...totals,
      [expense.category]: (totals[expense.category] ?? 0) + expense.amount,
    }),
    {},
  )

  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0)

  return { expenses, totalsByCategory, total }
}
```

Specifying `timeZone: 'UTC'` avoids a date-only string rendering as the previous day in time zones west of UTC.

## One-pass reduction alternative

After filtering and mapping, one `reduce` can calculate both aggregates:

```ts
const aggregate = expenses.reduce(
  (result, expense) => {
    result.total += expense.amount
    result.totalsByCategory[expense.category] =
      (result.totalsByCategory[expense.category] ?? 0) + expense.amount
    return result
  },
  { total: 0, totalsByCategory: {} as ExpenseReport['totalsByCategory'] },
)
```

This is efficient and valid. It mutates only the newly created accumulator, not application state or input data. The separate-reduction version may be easier to explain in a short interview.

## Other valid approaches

- Keep all values in cents until final presentation to reduce floating-point currency risk. That would require adjusting the supplied output type or converting only at the boundary.
- Build a category map with `Map` and convert it to an object. This is more machinery than the current output contract needs.
