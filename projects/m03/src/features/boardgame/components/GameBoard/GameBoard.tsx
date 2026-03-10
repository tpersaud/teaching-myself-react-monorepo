import type { Board, Position } from '../../types'

import { Square } from '../Square'

type GameBoardProps = {
  board: Board
  onSquareClick: (position: Position) => void
  isDisabled?: (position: Position) => boolean
}

export function GameBoard({ board, onSquareClick, isDisabled }: GameBoardProps) {
  return (
    <div
      className="tttBoard"
      data-testid="ttt-board"
      style={{ gridTemplateColumns: `repeat(${board[0]?.length ?? 0}, 1fr)` }}
    >
      {board.map((rowValues, row) =>
        rowValues.map((value, col) => {
          const position = { row, col }
          const disabled = isDisabled?.(position) ?? false

          return (
            <Square
              key={`${row}-${col}`}
              value={value}
              position={position}
              disabled={disabled}
              onClick={onSquareClick}
            />
          )
        }),
      )}
    </div>
  )
}
