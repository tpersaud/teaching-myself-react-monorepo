import type { Board, Position } from '../../types'
import { isValidPosition } from './isValidPosition'

export function isSquareEmpty(board: Board, position: Position): boolean {
  if (!isValidPosition(board, position)) {
    throw new Error('Position is out of bounds.')
  }

  return board[position.row][position.col] === null
}
