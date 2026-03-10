import type { Position, SquareValue } from '../../types'

type SquareProps = {
  value: SquareValue
  position: Position
  disabled: boolean
  onClick: (position: Position) => void
}

export function Square({ value, position, disabled, onClick }: SquareProps) {
  return (
    <button
      id={`ttt-square-${position.row}-${position.col}`}
      data-testid={`ttt-square-${position.row}-${position.col}`}
      type="button"
      className="tttSquare"
      data-row={position.row}
      data-col={position.col}
      disabled={disabled}
      aria-disabled={disabled}
      onClick={() => onClick(position)}
    >
      {value}
    </button>
  )
}
