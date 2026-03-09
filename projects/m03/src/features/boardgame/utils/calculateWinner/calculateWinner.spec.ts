import { describe, expect, it } from 'vitest'

import type { Board, GameResult, SquareValue } from '../../types'
import * as calculateWinnerModule from './calculateWinner'

const calculateWinner = (
  calculateWinnerModule as unknown as {
    calculateWinner: (board: Board) => GameResult
  }
).calculateWinner

function makeBoard(rows: SquareValue[][]): Board {
  return rows
}

function fillBoard(size: number, value: SquareValue): Board {
  return Array.from({ length: size }, () => Array.from({ length: size }, () => value))
}

describe('calculateWinner', () => {
  describe('board shape validation', () => {
    it('throws when board is empty', () => {
      expect(() => calculateWinner([] as unknown as Board)).toThrow()
    })

    it('throws when board is not square (ragged rows)', () => {
      const board = [[null, null], [null]] as unknown as Board
      expect(() => calculateWinner(board)).toThrow()
    })

    it('throws when board is not square (rowCount != colCount)', () => {
      const board = makeBoard([
        [null, null, null],
        [null, null, null],
      ])
      expect(() => calculateWinner(board)).toThrow()
    })
  })

  describe('null edge cases', () => {
    it('returns inProgress for an all-null 3x3 board', () => {
      const board = fillBoard(3, null)
      const result = calculateWinner(board)
      expect(result).toEqual({ kind: 'inProgress' } satisfies GameResult)
    })

    it('does not count a row as a win if any square in the line is null', () => {
      const board = makeBoard([
        ['X', 'X', null],
        [null, null, null],
        [null, null, null],
      ])
      expect(calculateWinner(board)).toEqual({ kind: 'inProgress' } satisfies GameResult)
    })
  })

  describe('winner detection (NxN)', () => {
    it('returns winner when X has a complete row on 3x3', () => {
      const board = makeBoard([
        ['X', 'X', 'X'],
        [null, 'O', null],
        ['O', null, null],
      ])
      expect(calculateWinner(board)).toEqual({ kind: 'winner', winner: 'X' } satisfies GameResult)
    })

    it('returns winner when O has a complete column on 4x4', () => {
      const board = makeBoard([
        ['O', null, null, null],
        ['O', 'X', null, null],
        ['O', null, 'X', null],
        ['O', null, null, 'X'],
      ])
      expect(calculateWinner(board)).toEqual({ kind: 'winner', winner: 'O' } satisfies GameResult)
    })

    it('returns winner when X has a complete main diagonal on 5x5', () => {
      const board = makeBoard([
        ['X', null, null, null, null],
        [null, 'X', null, null, null],
        [null, null, 'X', null, null],
        [null, null, null, 'X', null],
        [null, null, null, null, 'X'],
      ])
      expect(calculateWinner(board)).toEqual({ kind: 'winner', winner: 'X' } satisfies GameResult)
    })
  })

  describe('draw vs inProgress', () => {
    it('returns inProgress when there is no winner and moves remain (4x4)', () => {
      const board = makeBoard([
        ['X', 'O', 'X', 'O'],
        ['O', 'X', 'X', 'X'],
        ['X', 'O', 'X', null],
        ['O', 'X', 'O', 'O'],
      ])
      expect(calculateWinner(board)).toEqual({ kind: 'inProgress' } satisfies GameResult)
    })

    it('returns draw when there is no winner and the board is full (3x3)', () => {
      const board = makeBoard([
        ['X', 'O', 'X'],
        ['X', 'O', 'O'],
        ['O', 'X', 'X'],
      ])
      expect(calculateWinner(board)).toEqual({ kind: 'draw' } satisfies GameResult)
    })
  })
})
