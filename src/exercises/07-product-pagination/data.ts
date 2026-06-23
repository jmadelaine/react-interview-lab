export type Product = {
  id: number
  name: string
  category: 'Desk' | 'Writing' | 'Storage' | 'Lighting'
  price: number
  color: string
}

export const products: Product[] = [
  { id: 1, name: 'Wool desk pad', category: 'Desk', price: 68, color: '#b5a99a' },
  { id: 2, name: 'Grid notebook', category: 'Writing', price: 18, color: '#707b66' },
  { id: 3, name: 'Fine line pens', category: 'Writing', price: 24, color: '#34393a' },
  { id: 4, name: 'Oak pencil tray', category: 'Storage', price: 42, color: '#b48355' },
  { id: 5, name: 'Task lamp', category: 'Lighting', price: 126, color: '#d0c5ac' },
  { id: 6, name: 'Document stand', category: 'Desk', price: 54, color: '#667c7c' },
  { id: 7, name: 'Weekly planner', category: 'Writing', price: 22, color: '#cc927c' },
  { id: 8, name: 'Cable organiser', category: 'Desk', price: 16, color: '#55615c' },
  { id: 9, name: 'Archive box', category: 'Storage', price: 34, color: '#95816c' },
  { id: 10, name: 'Clip light', category: 'Lighting', price: 48, color: '#d9a548' },
  { id: 11, name: 'Brass ruler', category: 'Writing', price: 28, color: '#ad8b48' },
  { id: 12, name: 'Monitor shelf', category: 'Desk', price: 96, color: '#896e54' },
  { id: 13, name: 'Letter tray', category: 'Storage', price: 38, color: '#8c9891' },
  { id: 14, name: 'Pocket sketchbook', category: 'Writing', price: 14, color: '#8d5c50' },
]
