import { useEffect, useState } from 'react'
import { ExerciseLayout } from '../../components/ExerciseLayout'
import { exercises } from '../../exercises'

const meta = exercises[7]
const initialSeconds = 90

export function CountdownTimerExercise() {
  const [secondsRemaining, setSecondsRemaining] = useState(initialSeconds)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    // TODO: Exercise 08
    // While the timer is running, subtract one second every second.
    // Stop at zero and clean up the interval.
  }, [isRunning])

  function handleStart() {
    // TODO: Exercise 08
  }

  function handlePause() {
    // TODO: Exercise 08
  }

  function handleReset() {
    // TODO: Exercise 08
  }

  const minutes = Math.floor(secondsRemaining / 60)
  const seconds = secondsRemaining % 60
  const progress = ((initialSeconds - secondsRemaining) / initialSeconds) * 100
  const status = secondsRemaining === 0 ? 'Complete' : isRunning ? 'In progress' : 'Paused'

  return (
    <ExerciseLayout
      meta={meta}
      notes={
        <>
          <div>
            <span className="brief-label">Your task</span>
            <p>Implement the interval lifecycle and the three timer controls.</p>
          </div>
          <a href="./src/exercises/08-countdown-timer/README.md" target="_blank">Open full brief ↗</a>
        </>
      }
    >
      <section className="workspace-card timer-workspace">
        <div className="timer-copy">
          <p className="eyebrow">Focus session</p>
          <h2>Ninety-second sprint</h2>
          <p>Use one short, uninterrupted session to make progress on a small task.</p>
          <dl className="timer-tips">
            <div><dt>01</dt><dd>Choose one specific outcome.</dd></div>
            <div><dt>02</dt><dd>Start the timer and remove distractions.</dd></div>
            <div><dt>03</dt><dd>Pause if interrupted; reset when ready.</dd></div>
          </dl>
        </div>

        <div className="timer-panel">
          <div className="timer-status"><span className={isRunning ? 'running' : ''} />{status}</div>
          <div className="timer-ring" style={{ '--progress': `${progress * 3.6}deg` } as React.CSSProperties}>
            <div>
              <time dateTime={`PT${secondsRemaining}S`}>{minutes}:{seconds.toString().padStart(2, '0')}</time>
              <span>remaining</span>
            </div>
          </div>
          <div className="timer-actions">
            <button className="primary-button" disabled={isRunning || secondsRemaining === 0} onClick={handleStart}>Start</button>
            <button disabled={!isRunning} onClick={handlePause}>Pause</button>
            <button disabled={secondsRemaining === initialSeconds && !isRunning} onClick={handleReset}>Reset</button>
          </div>
          {secondsRemaining === 0 ? <p className="timer-complete" role="status">Sprint complete. Take a breath.</p> : null}
        </div>
      </section>
    </ExerciseLayout>
  )
}
