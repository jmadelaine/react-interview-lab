export type Candidate = {
  id: string
  name: string
  role: 'Frontend' | 'Backend' | 'Product' | 'Design'
  location: 'Tokyo' | 'Berlin' | 'New York' | 'Remote'
  stage: 'applied' | 'interview' | 'offer'
  availableRemote: boolean
  skills: string[]
  lastActivity: string
  accent: string
}

export const candidates: Candidate[] = [
  {
    id: 'cand-101',
    name: 'Mina Park',
    role: 'Frontend',
    location: 'Tokyo',
    stage: 'interview',
    availableRemote: true,
    skills: ['React', 'TypeScript', 'Design systems'],
    lastActivity: '2026-06-24',
    accent: '#5f8bd3',
  },
  {
    id: 'cand-102',
    name: 'Owen Brooks',
    role: 'Backend',
    location: 'Remote',
    stage: 'applied',
    availableRemote: true,
    skills: ['Node.js', 'PostgreSQL', 'Observability'],
    lastActivity: '2026-06-23',
    accent: '#68a07c',
  },
  {
    id: 'cand-103',
    name: 'Aiko Tanaka',
    role: 'Product',
    location: 'Tokyo',
    stage: 'offer',
    availableRemote: false,
    skills: ['Roadmaps', 'Research', 'Analytics'],
    lastActivity: '2026-06-21',
    accent: '#d28c52',
  },
  {
    id: 'cand-104',
    name: 'Lena Weiss',
    role: 'Design',
    location: 'Berlin',
    stage: 'interview',
    availableRemote: true,
    skills: ['Interaction design', 'Prototyping', 'Research'],
    lastActivity: '2026-06-19',
    accent: '#9372c9',
  },
  {
    id: 'cand-105',
    name: 'Rafael Costa',
    role: 'Frontend',
    location: 'New York',
    stage: 'applied',
    availableRemote: false,
    skills: ['React', 'Accessibility', 'Testing'],
    lastActivity: '2026-06-18',
    accent: '#cb6f63',
  },
  {
    id: 'cand-106',
    name: 'Nora Ibrahim',
    role: 'Backend',
    location: 'Berlin',
    stage: 'offer',
    availableRemote: true,
    skills: ['Go', 'Distributed systems', 'APIs'],
    lastActivity: '2026-06-15',
    accent: '#4f9e9b',
  },
  {
    id: 'cand-107',
    name: 'Theo Martin',
    role: 'Product',
    location: 'Remote',
    stage: 'interview',
    availableRemote: true,
    skills: ['B2B SaaS', 'Discovery', 'Pricing'],
    lastActivity: '2026-06-12',
    accent: '#6f8fb0',
  },
  {
    id: 'cand-108',
    name: 'Sara Ahmed',
    role: 'Design',
    location: 'Tokyo',
    stage: 'applied',
    availableRemote: false,
    skills: ['Visual design', 'Brand systems', 'Figma'],
    lastActivity: '2026-06-09',
    accent: '#d19a54',
  },
]
