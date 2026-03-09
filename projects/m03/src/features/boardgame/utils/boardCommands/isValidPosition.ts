import type { Board, Position } from '../../types'
import { getBoardSize } from '../calculateWinner'

export function isValidPosition(board: Board, position: Position): boolean {
  const size = getBoardSize(board)

  return position.row >= 0 && position.row < size && position.col >= 0 && position.col < size
}
