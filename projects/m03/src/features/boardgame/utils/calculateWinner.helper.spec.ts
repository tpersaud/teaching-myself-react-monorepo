import { describe, expect, it } from 'vitest'

import type { Board } from '../types'
import { getBoardSize } from './calculateWinner.helper'

function makeBoard(rows: (null | 'X' | 'O')[][]): Board {
  return rows as unknown as Board
}

describe('getBoardSize', () => {
  it('throws a friendly error when board is empty', () => {
    expect(() => getBoardSize([] as unknown as Board)).toThrow('Board cannot be empty.')
  })

  it('throws when board rows are empty', () => {
    const board = makeBoard([[]])
    expect(() => getBoardSize(board)).toThrow('Board rows cannot be empty.')
  })

  it('throws when board is ragged (rows not same length)', () => {
    const board = makeBoard([
      [null, null, null],
      [null, null],
      [null, null, null],
    ])

    expect(() => getBoardSize(board)).toThrow('Board rows must all have the same length.')
  })

  it('throws when board is rectangular (rowCount != columnCount)', () => {
    const board = makeBoard([
      [null, null, null],
      [null, null, null],
    ])

    expect(() => getBoardSize(board)).toThrow('Board must be an NxN grid.')
  })

  it('returns N for a valid 3x3 board', () => {
    const board = makeBoard([
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ])

    expect(getBoardSize(board)).toBe(3)
  })

  it('returns N for a valid 4x4 board', () => {
    const board = makeBoard([
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
    ])

    expect(getBoardSize(board)).toBe(4)
  })
})
