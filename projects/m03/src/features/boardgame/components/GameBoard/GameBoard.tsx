import type { Board, Position } from '../../types'

type GameBoardProps = {
  board: Board
  onSquareClick: (position: Position) => void
  isDisabled?: (position: Position) => boolean
}

export function GameBoard({ board, onSquareClick, isDisabled }: GameBoardProps) {
  return (
    <div className="tttBoard" style={{ gridTemplateColumns: `repeat(${board[0]?.length ?? 0}, 1fr)` }}>
      {board.map((rowValues, row) =>
        rowValues.map((value, col) => {
          const position = { row, col }
          const disabled = isDisabled?.(position) ?? false

          return (
            <button
              key={`${row}-${col}`}
              type="button"
              className="tttSquare"
              data-row={row}
              data-col={col}
              disabled={disabled}
              aria-disabled={disabled}
              onClick={() => onSquareClick(position)}
            >
              {value}
            </button>
          )
        }),
      )}
    </div>
  )
}
