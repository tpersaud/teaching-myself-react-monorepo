import { describe, expect, it } from 'vitest'

import type { Board } from '../../types'
import { applyMove } from './applyMove'

function makeBoard(rows: (null | 'X' | 'O')[][]): Board {
  return rows as unknown as Board
}

describe('applyMove', () => {
  it('returns a new board with the move applied (immutably)', () => {
    const board = makeBoard([
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ])

    const next = applyMove(board, { row: 1, col: 1 }, 'X')

    expect(next).toEqual([
      [null, null, null],
      [null, 'X', null],
      [null, null, null],
    ])

    expect(next).not.toBe(board)
    expect(next[1]).not.toBe(board[1])
    expect(board[1][1]).toBe(null)
  })

  it('throws when the position is out of bounds', () => {
    const board = makeBoard([
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ])

    expect(() => applyMove(board, { row: 3, col: 0 }, 'X')).toThrow('Cannot apply move.')
  })

  it('throws when the square is already occupied', () => {
    const board = makeBoard([
      ['X', null, null],
      [null, null, null],
      [null, null, null],
    ])

    expect(() => applyMove(board, { row: 0, col: 0 }, 'O')).toThrow('Cannot apply move.')
  })

  it('throws when the game is already over', () => {
    const board = makeBoard([
      ['X', 'X', 'X'],
      [null, 'O', null],
      [null, null, 'O'],
    ])

    expect(() => applyMove(board, { row: 1, col: 0 }, 'O')).toThrow('Cannot apply move.')
  })
})
