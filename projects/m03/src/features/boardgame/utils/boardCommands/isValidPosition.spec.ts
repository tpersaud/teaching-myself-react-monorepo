import { describe, expect, it } from 'vitest'

import type { Board } from '../../types'
import { isValidPosition } from './isValidPosition'

function makeBoard(rows: (null | 'X' | 'O')[][]): Board {
  return rows as unknown as Board
}

describe('isValidPosition', () => {
  it('returns true for an in-bounds position on a 3x3 board', () => {
    const board = makeBoard([
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ])

    expect(isValidPosition(board, { row: 0, col: 0 })).toBe(true)
    expect(isValidPosition(board, { row: 2, col: 2 })).toBe(true)
  })

  it('returns false for out-of-bounds positions', () => {
    const board = makeBoard([
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ])

    expect(isValidPosition(board, { row: -1, col: 0 })).toBe(false)
    expect(isValidPosition(board, { row: 0, col: -1 })).toBe(false)
    expect(isValidPosition(board, { row: 3, col: 0 })).toBe(false)
    expect(isValidPosition(board, { row: 0, col: 3 })).toBe(false)
  })

  it('throws when the board is not NxN', () => {
    const raggedBoard = makeBoard([[null, null], [null]])
    expect(() => isValidPosition(raggedBoard, { row: 0, col: 0 })).toThrow()
  })
})
