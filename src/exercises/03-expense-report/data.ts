export type Transaction = {
  id: string
  merchant: string
  category: 'Travel' | 'Meals' | 'Software' | 'Office'
  amountCents: number
  status: 'approved' | 'pending' | 'declined'
  kind: 'expense' | 'refund'
  date: string
}

export const transactions: Transaction[] = [
  { id: 'tx-101', merchant: 'JR East', category: 'Travel', amountCents: 12800, status: 'approved', kind: 'expense', date: '2026-06-03' },
  { id: 'tx-102', merchant: 'Figma', category: 'Software', amountCents: 2400, status: 'approved', kind: 'expense', date: '2026-06-05' },
  { id: 'tx-103', merchant: 'Blue Bottle', category: 'Meals', amountCents: 1850, status: 'approved', kind: 'expense', date: '2026-06-06' },
  { id: 'tx-104', merchant: 'Office Depot', category: 'Office', amountCents: 8999, status: 'pending', kind: 'expense', date: '2026-06-07' },
  { id: 'tx-105', merchant: 'ANA', category: 'Travel', amountCents: 64200, status: 'approved', kind: 'expense', date: '2026-06-09' },
  { id: 'tx-106', merchant: 'Notion', category: 'Software', amountCents: 1800, status: 'declined', kind: 'expense', date: '2026-06-10' },
  { id: 'tx-107', merchant: 'Kissa Roastery', category: 'Meals', amountCents: 3600, status: 'approved', kind: 'expense', date: '2026-06-12' },
  { id: 'tx-108', merchant: 'ANA refund', category: 'Travel', amountCents: 12000, status: 'approved', kind: 'refund', date: '2026-06-14' },
  { id: 'tx-109', merchant: 'Linear', category: 'Software', amountCents: 3200, status: 'approved', kind: 'expense', date: '2026-06-16' },
]
