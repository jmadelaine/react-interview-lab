import type { ReactNode } from 'react'
import type { ExerciseMeta } from '../exercises'

type Props = {
  meta: ExerciseMeta
  children: ReactNode
  notes?: ReactNode
}

export function ExerciseLayout({ meta, children, notes }: Props) {
  return (
    <main className="exercise-shell">
      <a className="back-link" href="#/">
        <span aria-hidden="true">←</span> All exercises
      </a>

      <header className="exercise-heading">
        <div>
          <p className="eyebrow">Exercise {meta.number} · {meta.eyebrow}</p>
          <h1>{meta.title}</h1>
          <p>{meta.summary}</p>
        </div>
        <div className="timer-chip" aria-label="Suggested time limit: 30 minutes">
          <span className="timer-dot" /> 30 min
        </div>
      </header>

      {notes ? <aside className="brief-card">{notes}</aside> : null}
      {children}
    </main>
  )
}
