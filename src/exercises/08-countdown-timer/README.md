# Exercise 08: Complete a countdown

**Suggested time:** 30 minutes

**File to edit:** `CountdownTimerExercise.tsx`

## Interviewer brief

> The focus-timer interface already displays 90 seconds and includes Start, Pause, and Reset controls. Complete the control handlers and countdown effect. The timer must stop at zero and must clean up its interval correctly.

## Requirements

1. Start sets the timer to its running state.
2. While running, the remaining time decreases by one every second.
3. Pause stops the countdown at its current value.
4. Starting after a pause continues from the paused value.
5. Reset stops the timer and restores 90 seconds.
6. The timer never goes below zero and stops itself when it reaches zero.
7. Every interval is cleaned up when the timer pauses or the component unmounts.

The timer display, progress ring, button disabled states, and completion message are already derived from component state.

## Acceptance checks

- The timer initially displays `1:30` and does not count down automatically.
- Start causes the display to decrease once per second.
- Pause prevents any further decrease.
- Start after pausing resumes the countdown.
- Reset always returns the display to `1:30` and leaves it paused.
- At zero, the display remains `0:00`, Start is disabled, and the completion message appears.

## Out of scope

Do not add editable durations, browser notifications, sounds, or persistence. Timing accurate to one-second UI updates is sufficient.

## If you finish early

Explain why interval cleanup matters and how you would test this component with fake timers.
