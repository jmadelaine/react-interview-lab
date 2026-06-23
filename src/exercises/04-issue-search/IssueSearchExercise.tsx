import { useState } from 'react'
import { ExerciseLayout } from '../../components/ExerciseLayout'
import { StatusPill } from '../../components/StatusPill'
import { exercises } from '../../exercises'
import type { IssueStatus, SupportIssue } from './api'

const meta = exercises[3]
type StatusFilter = 'all' | IssueStatus

export function IssueSearchExercise() {
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState<StatusFilter>('all')
  const [results] = useState<SupportIssue[]>([])
  const [isLoading] = useState(false)
  const [error] = useState('')

  // TODO: Exercise 04
  // Add an effect that calls searchIssues when query or status changes.
  // Include loading/error handling, a 300ms debounce, and stale-request cleanup.

  return (
    <ExerciseLayout
      meta={meta}
      notes={
        <>
          <div>
            <span className="brief-label">Your task</span>
            <p>Fetch issues when the search criteria change and manage the request lifecycle.</p>
          </div>
          <a href="./src/exercises/04-issue-search/README.md" target="_blank">Open full brief ↗</a>
        </>
      }
    >
      <section className="workspace-card issues-workspace">
        <div className="issues-heading">
          <div>
            <p className="eyebrow">Support operations</p>
            <h2>Issue inbox</h2>
          </div>
          <StatusPill tone="success">Service online</StatusPill>
        </div>

        <div className="issue-controls">
          <label className="search-field">
            <span aria-hidden="true">⌕</span>
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search ID, issue, or customer…" />
          </label>
          <div className="segmented-control" aria-label="Filter by status">
            {(['all', 'open', 'closed'] as const).map((option) => (
              <button
                className={status === option ? 'active' : ''}
                key={option}
                onClick={() => setStatus(option)}
                type="button"
              >
                {option[0].toUpperCase() + option.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {error ? <div className="alert alert-error" role="alert">{error}</div> : null}
        {isLoading ? <div className="loading-state"><span /><span /><span /></div> : null}

        {!isLoading && results.length > 0 ? (
          <div className="issue-list">
            {results.map((issue) => (
              <article className="issue-row" key={issue.id}>
                <div className={`priority-bar priority-${issue.priority.toLowerCase()}`} />
                <div className="issue-copy">
                  <span>{issue.id} · {issue.customer}</span>
                  <strong>{issue.title}</strong>
                </div>
                <StatusPill tone={issue.status === 'open' ? 'warning' : 'neutral'}>{issue.status}</StatusPill>
                <time dateTime={issue.updatedAt}>
                  {new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric' }).format(new Date(issue.updatedAt))}
                </time>
              </article>
            ))}
          </div>
        ) : null}

        {!isLoading && !error && results.length === 0 ? (
          <div className="empty-state"><span>⌕</span><h3>No issues to show</h3><p>Connect the search API to load matching issues.</p></div>
        ) : null}
      </section>
    </ExerciseLayout>
  )
}
