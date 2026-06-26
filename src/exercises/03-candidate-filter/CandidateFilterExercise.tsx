import { useState } from 'react'
import { ExerciseLayout } from '../../components/ExerciseLayout'
import { StatusPill } from '../../components/StatusPill'
import { exercises } from '../../exercises'
import { candidates, type Candidate } from './data'

type RoleFilter = 'all' | Candidate['role']
type StageFilter = 'all' | Candidate['stage']

const meta = exercises[2]

function getStageTone(stage: Candidate['stage']) {
  if (stage === 'offer') return 'success'
  if (stage === 'interview') return 'warning'
  return 'neutral'
}

export function CandidateFilterExercise() {
  const [query, setQuery] = useState('')
  const [role, setRole] = useState<RoleFilter>('all')
  const [stage, setStage] = useState<StageFilter>('all')
  const [remoteOnly, setRemoteOnly] = useState(false)

  // TODO: Exercise 03
  // Replace this assignment with a filtered copy of candidates.
  // Do not add sorting for this exercise.
  const visibleCandidates = candidates

  return (
    <ExerciseLayout
      meta={meta}
      notes={
        <>
          <div>
            <span className="brief-label">Your task</span>
            <p>Implement <code>visibleCandidates</code>. The controls are already wired up.</p>
          </div>
          <a href="./src/exercises/03-candidate-filter/README.md" target="_blank">Open full brief ↗</a>
        </>
      }
    >
      <section className="workspace-card candidate-workspace">
        <div className="candidate-toolbar">
          <div>
            <p className="eyebrow">Hiring pipeline</p>
            <h2>Candidate review</h2>
          </div>
          <span className="candidate-count">{visibleCandidates.length} matches</span>
        </div>

        <div className="candidate-filters">
          <label className="search-field">
            <span className="sr-only">Search candidates</span>
            <span aria-hidden="true">⌕</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search name, location, or skill..."
            />
          </label>
          <label>
            <span className="sr-only">Filter by role</span>
            <select value={role} onChange={(event) => setRole(event.target.value as RoleFilter)}>
              <option value="all">All roles</option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Product">Product</option>
              <option value="Design">Design</option>
            </select>
          </label>
          <label>
            <span className="sr-only">Filter by stage</span>
            <select value={stage} onChange={(event) => setStage(event.target.value as StageFilter)}>
              <option value="all">All stages</option>
              <option value="applied">Applied</option>
              <option value="interview">Interview</option>
              <option value="offer">Offer</option>
            </select>
          </label>
          <label className="checkbox-filter">
            <input
              checked={remoteOnly}
              onChange={(event) => setRemoteOnly(event.target.checked)}
              type="checkbox"
            />
            Remote only
          </label>
        </div>

        {visibleCandidates.length > 0 ? (
          <div className="candidate-list">
            {visibleCandidates.map((candidate) => (
              <article className="candidate-row" key={candidate.id}>
                <span className="avatar" style={{ backgroundColor: candidate.accent }}>
                  {candidate.name.split(' ').map((part) => part[0]).join('')}
                </span>
                <div className="candidate-primary">
                  <strong>{candidate.name}</strong>
                  <span>{candidate.role} · {candidate.location}</span>
                </div>
                <div className="skill-stack">
                  {candidate.skills.slice(0, 2).map((skill) => <span key={skill}>{skill}</span>)}
                </div>
                <StatusPill tone={getStageTone(candidate.stage)}>{candidate.stage}</StatusPill>
                <time dateTime={candidate.lastActivity}>
                  {new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric' }).format(new Date(candidate.lastActivity))}
                </time>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-state"><span>⌕</span><h3>No candidates found</h3><p>Adjust the filters to widen the list.</p></div>
        )}
      </section>
    </ExerciseLayout>
  )
}
