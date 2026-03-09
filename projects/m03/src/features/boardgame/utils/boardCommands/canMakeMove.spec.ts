import { describe, expect, it } from 'vitest'

import type { Board } from '../../types'
import { canMakeMove } from './canMakeMove'

function makeBoard(rows: (null | 'X' | 'O')[][]): Board {
  return rows as unknown as Board
}

describe('canMakeMove', () => {
  it('returns true for an empty square on an in-progress game', () => {
    const board = makeBoard([
      ['X', null, null],
      [null, 'O', null],
      [null, null, null],
    ])

    expect(canMakeMove(board, { row: 2, col: 2 })).toBe(true)
  })

  it('returns false for out-of-bounds positions', () => {
    const board = makeBoard([
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ])

    expect(canMakeMove(board, { row: -1, col: 0 })).toBe(false)
    expect(canMakeMove(board, { row: 3, col: 0 })).toBe(false)
  })

  it('returns false for occupied squares', () => {
    const board = makeBoard([
      ['X', null, null],
      [null, null, null],
      [null, null, null],
    ])

    expect(canMakeMove(board, { row: 0, col: 0 })).toBe(false)
  })

  it('returns false when the game is already over (winner)', () => {
    const board = makeBoard([
      ['X', 'X', 'X'],
      [null, 'O', null],
      [null, null, 'O'],
    ])

    expect(canMakeMove(board, { row: 1, col: 0 })).toBe(false)
  })

  it('returns false when the game is already over (draw)', () => {
    const board = makeBoard([
      ['X', 'O', 'X'],
      ['X', 'O', 'O'],
      ['O', 'X', 'X'],
    ])

    expect(canMakeMove(board, { row: 0, col: 0 })).toBe(false)
  })
})
