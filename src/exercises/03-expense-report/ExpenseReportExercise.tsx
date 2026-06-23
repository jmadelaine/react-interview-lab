import { ExerciseLayout } from '../../components/ExerciseLayout'
import { exercises } from '../../exercises'
import { transactions } from './data'
import { buildExpenseReport } from './report'

const meta = exercises[2]
const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })

export function ExpenseReportExercise() {
  const report = buildExpenseReport(transactions)

  return (
    <ExerciseLayout
      meta={meta}
      notes={
        <>
          <div>
            <span className="brief-label">Your task</span>
            <p>Complete <code>buildExpenseReport</code> using array transformations.</p>
          </div>
          <a href="./src/exercises/03-expense-report/README.md" target="_blank">Open full brief ↗</a>
        </>
      }
    >
      <section className="workspace-card report-workspace">
        <div className="report-topbar">
          <div>
            <p className="eyebrow">June 2026</p>
            <h2>Approved expenses</h2>
          </div>
          <div className="total-block"><span>Total spend</span><strong>{currency.format(report.total)}</strong></div>
        </div>

        <div className="category-grid">
          {(['Travel', 'Meals', 'Software', 'Office'] as const).map((category) => (
            <article key={category}>
              <span className={`category-icon category-${category.toLowerCase()}`}>{category[0]}</span>
              <div><small>{category}</small><strong>{currency.format(report.totalsByCategory[category] ?? 0)}</strong></div>
            </article>
          ))}
        </div>

        <div className="data-table" role="table" aria-label="Approved expenses">
          <div className="table-row table-head" role="row">
            <span>Merchant</span><span>Category</span><span>Date</span><span>Amount</span>
          </div>
          {report.expenses.map((expense) => (
            <div className="table-row" role="row" key={expense.id}>
              <strong>{expense.merchant}</strong>
              <span>{expense.category}</span>
              <span>{expense.dateLabel}</span>
              <strong>{currency.format(expense.amount)}</strong>
            </div>
          ))}
        </div>
        {report.expenses.length === 0 ? <div className="inline-empty">Complete the report function to reveal the data.</div> : null}
      </section>
    </ExerciseLayout>
  )
}
