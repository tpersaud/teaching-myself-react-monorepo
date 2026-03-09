import { describe, expect, it } from 'vitest'

import type { Board } from '../types'
import {
  getBoardSize,
  getColumns,
  getDiagonals,
  getRows,
  getWinningLines,
  isLineEmpty,
  isWinningLine,
  validateWinningMarks,
} from './calculateWinner.helper'

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

describe('getRows', () => {
  it('returns the rows in order', () => {
    const board = makeBoard([
      ['X', null, 'O'],
      [null, 'X', null],
      ['O', null, 'X'],
    ])

    expect(getRows(board)).toEqual([
      ['X', null, 'O'],
      [null, 'X', null],
      ['O', null, 'X'],
    ])
  })

  it('returns a new array instance (does not return the same reference)', () => {
    const board = makeBoard([
      [null, null],
      [null, null],
    ])

    expect(getRows(board)).not.toBe(board)
  })
})

describe('getColumns', () => {
  it('returns the columns in order', () => {
    const board = makeBoard([
      ['X', null, 'O'],
      [null, 'X', null],
      ['O', null, 'X'],
    ])

    expect(getColumns(board)).toEqual([
      ['X', null, 'O'],
      [null, 'X', null],
      ['O', null, 'X'],
    ])
  })
})

describe('getDiagonals', () => {
  it('returns main diagonal then anti-diagonal', () => {
    const board = makeBoard([
      ['X', null, 'O'],
      [null, 'X', null],
      ['O', null, 'X'],
    ])

    expect(getDiagonals(board)).toEqual([
      ['X', 'X', 'X'],
      ['O', 'X', 'O'],
    ])
  })
})

describe('getWinningLines', () => {
  it('returns rows, then columns, then diagonals', () => {
    const board = makeBoard([
      ['X', null, 'O'],
      [null, 'X', null],
      ['O', null, 'X'],
    ])

    expect(getWinningLines(board)).toEqual([
      // rows
      ['X', null, 'O'],
      [null, 'X', null],
      ['O', null, 'X'],

      // columns
      ['X', null, 'O'],
      [null, 'X', null],
      ['O', null, 'X'],

      // diagonals
      ['X', 'X', 'X'],
      ['O', 'X', 'O'],
    ])
  })
})

describe('validateWinningMarks', () => {
  it('does not throw when there are no winning marks', () => {
    expect(() => validateWinningMarks([])).not.toThrow()
    expect(() => validateWinningMarks([null, null])).not.toThrow()
  })

  it('does not throw when there is only one unique winning mark', () => {
    expect(() => validateWinningMarks(['X'])).not.toThrow()
    expect(() => validateWinningMarks(['X', 'X'])).not.toThrow()
    expect(() => validateWinningMarks([null, 'O', 'O'])).not.toThrow()
  })

  it('throws when more than one player has a winning line', () => {
    expect(() => validateWinningMarks(['X', 'O'])).toThrow(
      'Invalid board state: multiple players have winning lines.'
    )
    expect(() => validateWinningMarks([null, 'X', 'O', 'X'])).toThrow(
      'Invalid board state: multiple players have winning lines.'
    )
  })
})
