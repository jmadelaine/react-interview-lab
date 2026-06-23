import { useState } from 'react'
import { ExerciseLayout } from '../../components/ExerciseLayout'
import { exercises } from '../../exercises'
import { contacts } from './data'

type SortOption = 'name-asc' | 'name-desc' | 'recent'
const meta = exercises[1]

export function AddressBookExercise() {
  const [query, setQuery] = useState('')
  const [sortBy, setSortBy] = useState<SortOption>('name-asc')

  // TODO: Exercise 02
  // Replace this assignment with a filtered and sorted copy of contacts.
  const visibleContacts = contacts

  return (
    <ExerciseLayout
      meta={meta}
      notes={
        <>
          <div>
            <span className="brief-label">Your task</span>
            <p>Implement <code>visibleContacts</code>. Search and sort controls are wired up.</p>
          </div>
          <a href="./src/exercises/02-address-book/README.md" target="_blank">Open full brief ↗</a>
        </>
      }
    >
      <section className="workspace-card contacts-workspace">
        <div className="contacts-toolbar">
          <div>
            <p className="eyebrow">Company directory</p>
            <h2>Address book</h2>
          </div>
          <span className="contact-count">{visibleContacts.length} contacts</span>
        </div>

        <div className="filter-bar">
          <label className="search-field">
            <span className="sr-only">Search contacts</span>
            <span aria-hidden="true">⌕</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search name, email, company, or city…"
            />
          </label>
          <label>
            <span className="sr-only">Sort contacts</span>
            <select value={sortBy} onChange={(event) => setSortBy(event.target.value as SortOption)}>
              <option value="name-asc">Name A–Z</option>
              <option value="name-desc">Name Z–A</option>
              <option value="recent">Recently contacted</option>
            </select>
          </label>
        </div>

        {visibleContacts.length > 0 ? (
          <div className="contact-list">
            {visibleContacts.map((contact) => (
              <article className="contact-row" key={contact.id}>
                <span className="avatar" style={{ backgroundColor: contact.color }}>
                  {contact.name.split(' ').map((part) => part[0]).join('')}
                </span>
                <div className="contact-primary">
                  <strong>{contact.name}</strong>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </div>
                <div className="contact-meta"><span>Company</span><strong>{contact.company}</strong></div>
                <div className="contact-meta"><span>City</span><strong>{contact.city}</strong></div>
                <time dateTime={contact.lastContacted}>
                  {new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric' }).format(new Date(contact.lastContacted))}
                </time>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-state"><span>⌕</span><h3>No contacts found</h3><p>Try a different search term.</p></div>
        )}
      </section>
    </ExerciseLayout>
  )
}
