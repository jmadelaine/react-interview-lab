export type ExerciseMeta = {
  slug: string
  number: string
  title: string
  eyebrow: string
  summary: string
  skills: string[]
  level: 'Core' | 'Intermediate'
}

export const exercises: ExerciseMeta[] = [
  {
    slug: 'create-user',
    number: '01',
    title: 'Create a teammate',
    eyebrow: 'Async form submission',
    summary: 'Complete a form handler that validates input and calls a mock API.',
    skills: ['forms', 'async/await', 'error states'],
    level: 'Core',
  },
  {
    slug: 'address-book',
    number: '02',
    title: 'Find a contact',
    eyebrow: 'Filter and sort',
    summary: 'Turn search and sort controls into a useful address book.',
    skills: ['derived state', 'filter', 'sort'],
    level: 'Core',
  },
  {
    slug: 'expense-report',
    number: '03',
    title: 'Build an expense report',
    eyebrow: 'Transform collections',
    summary: 'Convert raw transaction data into a grouped business report.',
    skills: ['map', 'filter', 'reduce'],
    level: 'Core',
  },
  {
    slug: 'issue-search',
    number: '04',
    title: 'Search support issues',
    eyebrow: 'Effects and request state',
    summary: 'Connect a search interface to a mock asynchronous API.',
    skills: ['useEffect', 'debounce', 'race conditions'],
    level: 'Intermediate',
  },
  {
    slug: 'shopping-cart',
    number: '05',
    title: 'Repair a shopping cart',
    eyebrow: 'Immutable state updates',
    summary: 'Implement cart actions and calculate a reliable order summary.',
    skills: ['state updates', 'reduce', 'edge cases'],
    level: 'Core',
  },
]
