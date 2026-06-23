export type FaqItem = {
  id: string
  question: string
  answer: string
  category: 'Account' | 'Billing' | 'Projects'
}

export const faqItems: FaqItem[] = [
  {
    id: 'change-email',
    question: 'How do I change my account email?',
    answer: 'Open your profile settings, choose Account details, and enter your new email. We will send a confirmation link to the new address.',
    category: 'Account',
  },
  {
    id: 'cancel-plan',
    question: 'Can I cancel my plan at any time?',
    answer: 'Yes. Your workspace stays active until the end of the current billing period, and you will not be charged again.',
    category: 'Billing',
  },
  {
    id: 'restore-project',
    question: 'Can a deleted project be restored?',
    answer: 'Deleted projects remain in the archive for 30 days. A workspace administrator can restore them from Settings.',
    category: 'Projects',
  },
  {
    id: 'invoice',
    question: 'Where can I download an invoice?',
    answer: 'Go to Settings, select Billing, and open Invoice history. Each invoice is available as a PDF.',
    category: 'Billing',
  },
  {
    id: 'guests',
    question: 'What can guest members access?',
    answer: 'Guests can only access projects they have been invited to. They cannot view workspace settings or billing information.',
    category: 'Account',
  },
]
