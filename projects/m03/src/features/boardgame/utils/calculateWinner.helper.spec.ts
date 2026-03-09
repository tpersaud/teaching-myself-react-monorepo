import { describe, expect, it } from 'vitest'

import type { Board } from '../types'
import { getBoardSize, isLineEmpty, isWinningLine } from './calculateWinner.helper'

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

describe('isLineEmpty', () => {
  it('returns true when all squares are null', () => {
    expect(isLineEmpty([null, null, null])).toBe(true)
  })

  it('returns false when at least one square is a mark', () => {
    expect(isLineEmpty([null, 'X', null])).toBe(false)
    expect(isLineEmpty(['O', null, null])).toBe(false)
  })
})

describe('isWinningLine', () => {
  it('returns false for an empty line', () => {
    expect(isWinningLine([])).toBe(false)
  })

  it('returns false when the line starts with null', () => {
    expect(isWinningLine([null, null, null])).toBe(false)
  })

  it('returns true when all squares are the same non-null mark', () => {
    expect(isWinningLine(['X', 'X', 'X'])).toBe(true)
    expect(isWinningLine(['O', 'O', 'O', 'O'])).toBe(true)
  })

  it('returns false when the line has mixed marks', () => {
    expect(isWinningLine(['X', 'O', 'X'])).toBe(false)
    expect(isWinningLine(['O', 'X', 'X', 'X'])).toBe(false)
  })

  it('returns false when the line contains null after a mark', () => {
    expect(isWinningLine(['X', 'X', null])).toBe(false)
    expect(isWinningLine(['O', null, 'O'])).toBe(false)
  })
})
