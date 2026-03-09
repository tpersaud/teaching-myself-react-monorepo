import type { Board } from '../../types'

export function createBoard(size: number): Board {
  if (size <= 0) {
    throw new Error('Board size must be greater than 0.')
  }

  return Array.from({ length: size }, () => Array.from({ length: size }, () => null))
}
