export type IssueStatus = 'open' | 'closed'

export type SupportIssue = {
  id: string
  title: string
  customer: string
  status: IssueStatus
  priority: 'Low' | 'Medium' | 'High'
  updatedAt: string
}

const issues: SupportIssue[] = [
  { id: 'SUP-1482', title: 'Cannot export the quarterly report', customer: 'Acme Studio', status: 'open', priority: 'High', updatedAt: '2026-06-23T08:15:00Z' },
  { id: 'SUP-1479', title: 'Invite email arrived after 20 minutes', customer: 'Monocle Labs', status: 'open', priority: 'Medium', updatedAt: '2026-06-22T14:30:00Z' },
  { id: 'SUP-1464', title: 'Billing address is not updating', customer: 'Northstar Co', status: 'closed', priority: 'Medium', updatedAt: '2026-06-20T02:10:00Z' },
  { id: 'SUP-1458', title: 'Dashboard is slow with large reports', customer: 'Juniper Works', status: 'open', priority: 'High', updatedAt: '2026-06-18T11:45:00Z' },
  { id: 'SUP-1441', title: 'Need to change workspace owner', customer: 'Paper Plane', status: 'closed', priority: 'Low', updatedAt: '2026-06-14T09:00:00Z' },
  { id: 'SUP-1427', title: 'CSV import rejects international phone numbers', customer: 'Orbit Japan', status: 'open', priority: 'High', updatedAt: '2026-06-10T15:20:00Z' },
  { id: 'SUP-1416', title: 'Missing receipt in expense export', customer: 'Acme Studio', status: 'closed', priority: 'Medium', updatedAt: '2026-06-06T04:50:00Z' },
]

type SearchOptions = {
  query: string
  status: 'all' | IssueStatus
  signal?: AbortSignal
}

const wait = (milliseconds: number, signal?: AbortSignal) =>
  new Promise<void>((resolve, reject) => {
    const timeoutId = window.setTimeout(resolve, milliseconds)
    signal?.addEventListener('abort', () => {
      window.clearTimeout(timeoutId)
      reject(new DOMException('Request aborted', 'AbortError'))
    })
  })

/** A ready-to-use mock endpoint. The word "offline" simulates a server error. */
export async function searchIssues({ query, status, signal }: SearchOptions) {
  // Short queries deliberately take longer, making stale responses reproducible.
  await wait(query.length < 3 ? 700 : 350, signal)

  if (query.toLowerCase() === 'offline') {
    throw new Error('The support service is temporarily unavailable.')
  }

  const normalizedQuery = query.trim().toLowerCase()
  return issues.filter((issue) => {
    const matchesQuery =
      issue.title.toLowerCase().includes(normalizedQuery) ||
      issue.customer.toLowerCase().includes(normalizedQuery) ||
      issue.id.toLowerCase().includes(normalizedQuery)
    const matchesStatus = status === 'all' || issue.status === status
    return matchesQuery && matchesStatus
  })
}
