import { useState, type FormEvent } from 'react'
import { ExerciseLayout } from '../../components/ExerciseLayout'
import { StatusPill } from '../../components/StatusPill'
import { exercises } from '../../exercises'

type Registration = {
  id: number
  name: string
  email: string
  track: string
  notes: string
  wantsUpdates: boolean
}

const meta = exercises[3]

export function RegistrationFormExercise() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [track, setTrack] = useState('')
  const [notes, setNotes] = useState('')
  const [wantsUpdates, setWantsUpdates] = useState(false)
  const [error, setError] = useState('')
  const [registrations, setRegistrations] = useState<Registration[]>([])

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    // TODO: Exercise 04
    // Wire the form fields to the state hooks above, then submit those state values here.
  }

  return (
    <ExerciseLayout
      meta={meta}
      notes={
        <>
          <div>
            <span className="brief-label">Your task</span>
            <p>Connect the inputs to state hooks, then complete <code>handleSubmit</code>.</p>
          </div>
          <a href="./src/exercises/04-registration-form/README.md" target="_blank">Open full brief ↗</a>
        </>
      }
    >
      <section className="workspace-card registration-workspace">
        <div className="registration-copy dark-panel">
          <p className="eyebrow">Workshop intake</p>
          <h2>Register attendees for the next cohort.</h2>
          <p>Collect the attendee details, preferred track, and optional notes before adding them to the roster.</p>
          <div className="registration-stat">
            <strong>{registrations.length}</strong>
            <span>{registrations.length === 1 ? 'registration' : 'registrations'}</span>
          </div>
        </div>

        <div className="registration-panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">New attendee</p>
              <h2>Registration</h2>
            </div>
            <StatusPill>Starter</StatusPill>
          </div>

          {error ? <div className="alert alert-error" role="alert">{error}</div> : null}

          <form onSubmit={handleSubmit} className="stack-form">
            <label>
              Full name
              <input type="text" placeholder="e.g. Jordan Lee" autoComplete="name" />
            </label>
            <label>
              Email
              <input type="email" placeholder="jordan@company.com" autoComplete="email" />
            </label>
            <label>
              Track
              <select defaultValue="">
                <option value="" disabled>Choose a track</option>
                <option>Frontend systems</option>
                <option>Product analytics</option>
                <option>Design leadership</option>
              </select>
            </label>
            <label>
              Notes
              <textarea placeholder="Accessibility needs, goals, or context" rows={4} />
            </label>
            <label className="checkbox-line">
              <input type="checkbox" />
              Send product updates
            </label>
            <button className="primary-button" type="submit">Add registration</button>
          </form>

          <div className="registration-list" aria-live="polite">
            {registrations.length > 0 ? (
              registrations.map((registration) => (
                <article key={registration.id}>
                  <div>
                    <strong>{registration.name}</strong>
                    <span>{registration.email}</span>
                  </div>
                  <StatusPill tone={registration.wantsUpdates ? 'success' : 'neutral'}>
                    {registration.track}
                  </StatusPill>
                </article>
              ))
            ) : (
              <div className="inline-empty">Submitted registrations will appear here.</div>
            )}
          </div>
        </div>
      </section>
    </ExerciseLayout>
  )
}
