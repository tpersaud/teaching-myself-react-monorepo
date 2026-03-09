import type { ReactNode } from 'react'

type SectionProps = {
  children: ReactNode
  ariaLabel: string
  className?: string
}

export function Section({ children, ariaLabel, className }: SectionProps) {
  return (
    <section className={['tttPanel', className].filter(Boolean).join(' ')} aria-label={ariaLabel}>
      {children}
    </section>
  )
}
