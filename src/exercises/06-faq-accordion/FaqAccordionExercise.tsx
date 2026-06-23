import { useState } from 'react'
import { ExerciseLayout } from '../../components/ExerciseLayout'
import { exercises } from '../../exercises'
import { faqItems } from './data'

const meta = exercises[5]

export function FaqAccordionExercise() {
  const [openItemId, setOpenItemId] = useState<string | null>(null)

  function toggleItem(_id: string) {
    // TODO: Exercise 06
    // Open the selected answer, or close it if it is already open.
    // Only one answer should be open at a time.
  }

  return (
    <ExerciseLayout
      meta={meta}
      notes={
        <>
          <div>
            <span className="brief-label">Your task</span>
            <p>Complete <code>toggleItem</code> so the questions behave like an accordion.</p>
          </div>
          <a href="./src/exercises/06-faq-accordion/README.md" target="_blank">Open full brief ↗</a>
        </>
      }
    >
      <section className="workspace-card faq-workspace">
        <div className="faq-intro">
          <p className="eyebrow">Help centre</p>
          <h2>Frequently asked questions</h2>
          <p>Quick answers to common questions about your account and workspace.</p>
          <div className="support-note">
            <span>?</span>
            <div><strong>Still need help?</strong><small>Our support team usually replies within one business day.</small></div>
          </div>
        </div>

        <div className="faq-list">
          {faqItems.map((item) => {
            const isOpen = openItemId === item.id
            const answerId = `answer-${item.id}`

            return (
              <article className={`faq-item ${isOpen ? 'faq-open' : ''}`} key={item.id}>
                <button
                  aria-controls={answerId}
                  aria-expanded={isOpen}
                  onClick={() => toggleItem(item.id)}
                  type="button"
                >
                  <span><small>{item.category}</small><strong>{item.question}</strong></span>
                  <span className="faq-icon" aria-hidden="true">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen ? <p id={answerId}>{item.answer}</p> : null}
              </article>
            )
          })}
        </div>
      </section>
    </ExerciseLayout>
  )
}
