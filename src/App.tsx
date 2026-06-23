import { useEffect, useState } from 'react'
import { exercises } from './exercises'
import { CreateUserExercise } from './exercises/01-create-user/CreateUserExercise'
import { AddressBookExercise } from './exercises/02-address-book/AddressBookExercise'
import { ExpenseReportExercise } from './exercises/03-expense-report/ExpenseReportExercise'
import { IssueSearchExercise } from './exercises/04-issue-search/IssueSearchExercise'
import { ShoppingCartExercise } from './exercises/05-shopping-cart/ShoppingCartExercise'
import { FaqAccordionExercise } from './exercises/06-faq-accordion/FaqAccordionExercise'
import { ProductPaginationExercise } from './exercises/07-product-pagination/ProductPaginationExercise'
import { CountdownTimerExercise } from './exercises/08-countdown-timer/CountdownTimerExercise'

const exercisePages: Record<string, React.ComponentType> = {
  'create-user': CreateUserExercise,
  'address-book': AddressBookExercise,
  'expense-report': ExpenseReportExercise,
  'issue-search': IssueSearchExercise,
  'shopping-cart': ShoppingCartExercise,
  'faq-accordion': FaqAccordionExercise,
  'product-pagination': ProductPaginationExercise,
  'countdown-timer': CountdownTimerExercise,
}

function useHashRoute() {
  const [hash, setHash] = useState(() => window.location.hash)

  useEffect(() => {
    const handleChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', handleChange)
    return () => window.removeEventListener('hashchange', handleChange)
  }, [])

  return hash.replace(/^#\/?/, '')
}

function HomePage() {
  return (
    <main className="home-shell">
      <header className="hero">
        <nav className="wordmark" aria-label="Home">
          <span className="wordmark-mark">R</span>
          <span>React Interview Lab</span>
        </nav>
        <div className="hero-copy">
          <p className="eyebrow">Frontend practice suite</p>
          <h1>Eight problems.<br />Thirty minutes each.</h1>
          <p className="hero-lede">
            Small, realistic React + TypeScript exercises built for live-coding
            interview practice. Read the brief, start a timer, and talk through
            your decisions.
          </p>
        </div>
        <div className="hero-stats" aria-label="Practice suite summary">
          <div><strong>8</strong><span>exercises</span></div>
          <div><strong>30</strong><span>minutes each</span></div>
          <div><strong>TS</strong><span>strict mode</span></div>
        </div>
      </header>

      <section className="exercise-index" aria-labelledby="exercise-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Choose a challenge</p>
            <h2 id="exercise-title">Practice queue</h2>
          </div>
          <p>Each exercise is isolated, so changes in one will not affect another.</p>
        </div>

        <div className="exercise-grid">
          {exercises.map((exercise) => (
            <a className="exercise-card" href={`#/${exercise.slug}`} key={exercise.slug}>
              <div className="card-topline">
                <span className="exercise-number">{exercise.number}</span>
                <span className={`level level-${exercise.level.toLowerCase()}`}>{exercise.level}</span>
              </div>
              <div>
                <p className="card-eyebrow">{exercise.eyebrow}</p>
                <h3>{exercise.title}</h3>
                <p>{exercise.summary}</p>
              </div>
              <div className="tag-row">
                {exercise.skills.map((skill) => <span key={skill}>{skill}</span>)}
              </div>
              <span className="start-link">Open exercise <span aria-hidden="true">↗</span></span>
            </a>
          ))}
        </div>
      </section>
    </main>
  )
}

export default function App() {
  const route = useHashRoute()
  const Page = exercisePages[route]

  if (Page) return <Page />
  return <HomePage />
}
