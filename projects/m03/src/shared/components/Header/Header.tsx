import type { ReactNode } from 'react'

type HeaderProps = {
  title: ReactNode
}

export function Header({ title }: HeaderProps) {
  return (
    <header className="tttHeader">
      <h1 className="tttTitle">{title}</h1>
    </header>
  )
}
