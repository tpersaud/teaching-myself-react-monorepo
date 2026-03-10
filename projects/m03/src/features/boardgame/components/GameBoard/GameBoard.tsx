import type { Board, Position } from '../../types'

import { Square } from '../Square'

type GameBoardProps = {
  board: Board
  onSquareClick: (position: Position) => void
  isDisabled?: (position: Position) => boolean
}

export function GameBoard({ board, onSquareClick, isDisabled }: GameBoardProps) {
  const size = board[0]?.length ?? 0

  return (
    <div
      className="tttBoard"
      data-testid="ttt-board"
      style={{ gridTemplateColumns: `repeat(${size}, 1fr)` }}
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
              hideRightBorder={col === size - 1}
              hideBottomBorder={row === size - 1}
              disabled={disabled}
              onClick={onSquareClick}
            />
          )
        }),
      )}
    </div>
  )
}
