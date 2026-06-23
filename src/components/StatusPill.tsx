type Props = {
  tone?: 'neutral' | 'success' | 'warning' | 'danger'
  children: React.ReactNode
}

export function StatusPill({ tone = 'neutral', children }: Props) {
  return <span className={`status-pill status-${tone}`}>{children}</span>
}
