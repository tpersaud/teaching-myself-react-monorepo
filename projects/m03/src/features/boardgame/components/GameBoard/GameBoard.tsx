import type { SquareValue } from '../../types'

type GameBoardProps = {
  boardSize: number
  squares: SquareValue[]
  onSquareClick: (row: number, col: number) => void
  isDisabled?: (row: number, col: number) => boolean
}

export function GameBoard({ boardSize, squares, onSquareClick, isDisabled }: GameBoardProps) {
  return (
    <div className="tttBoard" style={{ gridTemplateColumns: `repeat(${boardSize}, 1fr)` }}>
      {squares.map((value, index) => {
        const row = Math.floor(index / boardSize)
        const col = index % boardSize
        const disabled = isDisabled?.(row, col) ?? false

        return (
          <button
            key={`${row}-${col}`}
            type="button"
            className="tttSquare"
            data-row={row}
            data-col={col}
            disabled={disabled}
            aria-disabled={disabled}
            onClick={() => onSquareClick(row, col)}
          >
            {value}
          </button>
        )
      })}
    </div>
  )
}
