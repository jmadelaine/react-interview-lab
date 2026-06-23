export type CartItem = {
  id: string
  name: string
  variant: string
  unitPrice: number
  quantity: number
  inventory: number
  accent: string
}

export const initialItems: CartItem[] = [
  { id: 'desk-pad', name: 'Wool desk pad', variant: 'Stone / Large', unitPrice: 68, quantity: 1, inventory: 3, accent: '#c6b9a8' },
  { id: 'notebook', name: 'Grid notebook', variant: 'Olive / A5', unitPrice: 18, quantity: 2, inventory: 8, accent: '#79846d' },
  { id: 'pen-set', name: 'Fine line pen set', variant: 'Black / Set of 3', unitPrice: 24, quantity: 1, inventory: 1, accent: '#272b2d' },
]
