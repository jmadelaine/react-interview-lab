# Solution 04: Wire a registration form

The component already provides separate state hooks. A direct solution is to make each input controlled and build the submitted object from those state values.

## Controlled fields

```tsx
<input
  value={name}
  onChange={(event) => setName(event.target.value)}
  type="text"
  placeholder="e.g. Jordan Lee"
  autoComplete="name"
/>

<input
  value={email}
  onChange={(event) => setEmail(event.target.value)}
  type="email"
  placeholder="jordan@company.com"
  autoComplete="email"
/>

<select value={track} onChange={(event) => setTrack(event.target.value)}>
  <option value="" disabled>Choose a track</option>
  <option>Frontend systems</option>
  <option>Product analytics</option>
  <option>Design leadership</option>
</select>

<textarea
  value={notes}
  onChange={(event) => setNotes(event.target.value)}
  placeholder="Accessibility needs, goals, or context"
  rows={4}
/>

<input
  checked={wantsUpdates}
  onChange={(event) => setWantsUpdates(event.target.checked)}
  type="checkbox"
/>
```

## Submit handler

```tsx
function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault()

  const trimmedName = name.trim()
  const trimmedEmail = email.trim()

  if (!trimmedName || !trimmedEmail || !track) {
    setError('Name, email, and track are required.')
    return
  }

  const registration: Registration = {
    id: Date.now(),
    name: trimmedName,
    email: trimmedEmail,
    track,
    notes: notes.trim(),
    wantsUpdates,
  }

  setRegistrations((current) => [registration, ...current])
  setName('')
  setEmail('')
  setTrack('')
  setNotes('')
  setWantsUpdates(false)
  setError('')
}
```

The functional `setRegistrations` form preserves existing roster items even if multiple submissions happen close together.
