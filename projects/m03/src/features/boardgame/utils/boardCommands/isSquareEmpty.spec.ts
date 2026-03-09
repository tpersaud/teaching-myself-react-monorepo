import { describe, expect, it } from 'vitest'

import type { Board } from '../../types'
import { isSquareEmpty } from './isSquareEmpty'

function makeBoard(rows: (null | 'X' | 'O')[][]): Board {
  return rows as unknown as Board
}

describe('isSquareEmpty', () => {
  it('returns true when the square is null', () => {
    const board = makeBoard([
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ])

    expect(isSquareEmpty(board, { row: 1, col: 1 })).toBe(true)
  })

  it('returns false when the square is occupied', () => {
    const board = makeBoard([
      ['X', null, null],
      [null, 'O', null],
      [null, null, null],
    ])

    expect(isSquareEmpty(board, { row: 0, col: 0 })).toBe(false)
    expect(isSquareEmpty(board, { row: 1, col: 1 })).toBe(false)
  })

  it('throws when the position is out of bounds', () => {
    const board = makeBoard([
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ])

    expect(() => isSquareEmpty(board, { row: 3, col: 0 })).toThrow('Position is out of bounds.')
  })
})
