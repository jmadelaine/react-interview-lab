export type Contact = {
  id: number
  name: string
  email: string
  company: string
  city: string
  lastContacted: string
  color: string
}

export const contacts: Contact[] = [
  { id: 1, name: 'Aiko Tanaka', email: 'aiko@orbit.jp', company: 'Orbit', city: 'Tokyo', lastContacted: '2026-06-18', color: '#ef8354' },
  { id: 2, name: 'Ben Carter', email: 'ben@northstar.io', company: 'Northstar', city: 'London', lastContacted: '2026-05-24', color: '#5b7cfa' },
  { id: 3, name: 'Camila Rocha', email: 'camila@luma.co', company: 'Luma', city: 'São Paulo', lastContacted: '2026-06-21', color: '#1f9d78' },
  { id: 4, name: 'Dev Malik', email: 'dev@northstar.io', company: 'Northstar', city: 'Singapore', lastContacted: '2026-04-12', color: '#9b6ee5' },
  { id: 5, name: 'Elena Rossi', email: 'elena@canvas.it', company: 'Canvas', city: 'Milan', lastContacted: '2026-06-02', color: '#d45b8c' },
  { id: 6, name: 'Farah Nasser', email: 'farah@orbit.jp', company: 'Orbit', city: 'Dubai', lastContacted: '2026-03-29', color: '#d9982f' },
  { id: 7, name: 'George Wu', email: 'george@arcade.dev', company: 'Arcade', city: 'Vancouver', lastContacted: '2026-06-15', color: '#3e8e9e' },
  { id: 8, name: 'Hana Kim', email: 'hana@luma.co', company: 'Luma', city: 'Seoul', lastContacted: '2026-05-31', color: '#617a55' },
]
