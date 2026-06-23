import { useState, type FormEvent } from 'react'
import { ExerciseLayout } from '../../components/ExerciseLayout'
import { StatusPill } from '../../components/StatusPill'
import { exercises } from '../../exercises'
import type { User } from './api'

const meta = exercises[0]

export function CreateUserExercise() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [createdUser, setCreatedUser] = useState<User | null>(null)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    // TODO: Exercise 01
    // Validate the form, call createUser, and handle loading/success/error states.
  }

  return (
    <ExerciseLayout
      meta={meta}
      notes={
        <>
          <div>
            <span className="brief-label">Your task</span>
            <p>Complete <code>handleSubmit</code>. The mock API is already implemented.</p>
          </div>
          <a href="./src/exercises/01-create-user/README.md" target="_blank">Open full brief ↗</a>
        </>
      }
    >
      <section className="workspace-card split-workspace">
        <div className="workspace-copy dark-panel">
          <p className="eyebrow">Northstar workspace</p>
          <h2>Build the team behind the work.</h2>
          <p>Invite a teammate and choose the role they will use when they join.</p>
          <div className="member-stack" aria-label="Four teammates already in workspace">
            {['MS', 'AK', 'JL', 'RT'].map((initials) => <span key={initials}>{initials}</span>)}
            <small>4 teammates</small>
          </div>
        </div>

        <div className="form-panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">New invitation</p>
              <h2>Add a teammate</h2>
            </div>
            <StatusPill>Starter</StatusPill>
          </div>

          {error ? <div className="alert alert-error" role="alert">{error}</div> : null}
          {createdUser ? (
            <div className="alert alert-success" role="status">
              <strong>{createdUser.name}</strong> was added as {createdUser.role.toLowerCase()}.
            </div>
          ) : null}

          <form onSubmit={handleSubmit} className="stack-form">
            <label>
              Full name
              <input name="name" type="text" placeholder="e.g. Mina Park" autoComplete="name" />
            </label>
            <label>
              Work email
              <input name="email" type="email" placeholder="mina@company.com" autoComplete="email" />
            </label>
            <label>
              Workspace role
              <select name="role" defaultValue="">
                <option value="" disabled>Choose a role</option>
                <option>Designer</option>
                <option>Engineer</option>
                <option>Product manager</option>
              </select>
            </label>
            <button className="primary-button" disabled={isSubmitting} type="submit">
              {isSubmitting ? 'Adding teammate…' : 'Add teammate'}
            </button>
          </form>
        </div>
      </section>
    </ExerciseLayout>
  )
}
