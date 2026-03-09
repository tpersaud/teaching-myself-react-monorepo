import type { Board, PlayerMark, Position } from '../../types'
import { canMakeMove } from './canMakeMove'

export function applyMove(board: Board, position: Position, player: PlayerMark): Board {
  if (!canMakeMove(board, position)) {
    throw new Error('Cannot apply move.')
  }

  return board.map((row, rowIndex) =>
    row.map((square, colIndex) => {
      if (rowIndex === position.row && colIndex === position.col) {
        return player
      }
      return square
    })
  )
}
