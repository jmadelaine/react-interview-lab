# Solution 08: Complete a countdown

The effect should create an interval only while the timer is running and return a cleanup function for that specific interval.

## Example solution

```tsx
useEffect(() => {
  if (!isRunning) return

  const intervalId = window.setInterval(() => {
    setSecondsRemaining((currentSeconds) => {
      if (currentSeconds <= 1) {
        setIsRunning(false)
        return 0
      }

      return currentSeconds - 1
    })
  }, 1000)

  return () => window.clearInterval(intervalId)
}, [isRunning])

function handleStart() {
  if (secondsRemaining > 0) setIsRunning(true)
}

function handlePause() {
  setIsRunning(false)
}

function handleReset() {
  setIsRunning(false)
  setSecondsRemaining(initialSeconds)
}
```

The functional `setSecondsRemaining` callback always receives the latest value, avoiding a stale closure. When the callback reaches the final second, it stores zero and stops the timer. Changing `isRunning` reruns the effect, and the previous effect cleans up its interval.

## Alternative effect

A one-second timeout can schedule the next update instead of maintaining an interval:

```tsx
useEffect(() => {
  if (!isRunning || secondsRemaining === 0) return

  const timeoutId = window.setTimeout(() => {
    setSecondsRemaining((seconds) => seconds - 1)
  }, 1000)

  return () => window.clearTimeout(timeoutId)
}, [isRunning, secondsRemaining])
```

This is valid, but it also needs logic to set `isRunning` to `false` when the value reaches zero. The interval solution keeps the exercise focused on interval creation and cleanup.

Avoid creating an interval directly in the component body. Rendering can happen many times, which would create multiple active timers.
