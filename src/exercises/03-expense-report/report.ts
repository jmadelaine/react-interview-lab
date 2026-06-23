import type { Transaction } from './data'

export type DisplayExpense = {
  id: string
  merchant: string
  category: Transaction['category']
  amount: number
  dateLabel: string
}

export type ExpenseReport = {
  expenses: DisplayExpense[]
  totalsByCategory: Partial<Record<Transaction['category'], number>>
  total: number
}

export function buildExpenseReport(_transactions: Transaction[]): ExpenseReport {
  // TODO: Exercise 03
  // Use filter, map, and reduce to return the requested report.
  return {
    expenses: [],
    totalsByCategory: {},
    total: 0,
  }
}
