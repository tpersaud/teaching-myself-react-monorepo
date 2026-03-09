import type { Board, Position } from '../../types'
import { calculateWinner } from '../calculateWinner'
import { isValidPosition } from './isValidPosition'
import { isSquareEmpty } from './isSquareEmpty'

export function canMakeMove(board: Board, position: Position): boolean {
  if (!isValidPosition(board, position)) {
    return false
  }

  if (!isSquareEmpty(board, position)) {
    return false
  }

  const result = calculateWinner(board)
  return result.kind === 'inProgress'
}
