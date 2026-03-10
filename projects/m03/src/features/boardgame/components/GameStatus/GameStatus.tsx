import type { ReactNode } from 'react'

import { StatusBar } from '../StatusBar'

type GameStatusProps = {
  status: ReactNode
  onReset: () => void
}

export function GameStatus({ status, onReset }: GameStatusProps) {
  return <StatusBar status={status} onReset={onReset} />
}
