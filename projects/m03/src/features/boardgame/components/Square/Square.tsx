import type { Position, SquareValue } from '../../types'

type SquareProps = {
  value: SquareValue
  position: Position
  hideRightBorder?: boolean
  hideBottomBorder?: boolean
  disabled: boolean
  onClick: (position: Position) => void
}

export function Square({ value, position, hideRightBorder, hideBottomBorder, disabled, onClick }: SquareProps) {
  const className = [
    'tttSquare',
    hideRightBorder ? 'tttSquare--noRight' : null,
    hideBottomBorder ? 'tttSquare--noBottom' : null,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button
      id={`ttt-square-${position.row}-${position.col}`}
      data-testid={`ttt-square-${position.row}-${position.col}`}
      type="button"
      className={className}
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
