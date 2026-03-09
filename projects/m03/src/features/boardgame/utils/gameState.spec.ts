import { describe, expect, it } from 'vitest'

import type { GameState } from '../types'
import { createInitialGameState, jumpTo, makeMove } from './gameState'

describe('gameState (time travel)', () => {
  describe('createInitialGameState', () => {
    it('creates an empty NxN board history and sets X as next player', () => {
      const state = createInitialGameState(3, 'X')

      expect(state.currentMoveIndex).toBe(0)
      expect(state.nextPlayer).toBe('X')
      expect(state.history).toHaveLength(1)
      expect(state.history[0]).toEqual([
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ])
    })

    it('throws when size is 0 or negative', () => {
      expect(() => createInitialGameState(0, 'X')).toThrow('Board size must be greater than 0.')
      expect(() => createInitialGameState(-1, 'X')).toThrow('Board size must be greater than 0.')
    })

    it('supports O as the starting player', () => {
      const state = createInitialGameState(3, 'O')

      expect(state.currentMoveIndex).toBe(0)
      expect(state.startingPlayer).toBe('O')
      expect(state.nextPlayer).toBe('O')
      expect(state.history).toHaveLength(1)
    })
  })

  describe('makeMove', () => {
    it('places the next player mark and appends to history', () => {
      const state0 = createInitialGameState(3, 'X')
      const state1 = makeMove(state0, { row: 1, col: 1 })

      expect(state1.history).toHaveLength(2)
      expect(state1.currentMoveIndex).toBe(1)
      expect(state1.nextPlayer).toBe('O')
      expect(state1.history[1][1][1]).toBe('X')
    })

    it('throws when move is out of bounds', () => {
      const state = createInitialGameState(3, 'X')
      expect(() => makeMove(state, { row: -1, col: 0 })).toThrow('Move position is out of bounds.')
      expect(() => makeMove(state, { row: 0, col: 3 })).toThrow('Move position is out of bounds.')
    })

    it('throws when square is already occupied', () => {
      const state0 = createInitialGameState(3, 'X')
      const state1 = makeMove(state0, { row: 0, col: 0 })

      expect(() => makeMove(state1, { row: 0, col: 0 })).toThrow(
        'Cannot make a move: square is already occupied.'
      )
    })

    it('throws when game is already over', () => {
      const state0 = createInitialGameState(3, 'X')
      const state1 = makeMove(state0, { row: 0, col: 0 }) // X
      const state2 = makeMove(state1, { row: 1, col: 0 }) // O
      const state3 = makeMove(state2, { row: 0, col: 1 }) // X
      const state4 = makeMove(state3, { row: 1, col: 1 }) // O
      const state5 = makeMove(state4, { row: 0, col: 2 }) // X wins

      expect(() => makeMove(state5, { row: 2, col: 2 })).toThrow('Cannot make a move: game is already over.')
    })

    it('truncates future history when making a move after time-travel', () => {
      const state0 = createInitialGameState(3, 'X')
      const state1 = makeMove(state0, { row: 0, col: 0 })
      const state2 = makeMove(state1, { row: 0, col: 1 })
      const state3 = makeMove(state2, { row: 0, col: 2 })

      const jumped = jumpTo(state3, 1)
      const branched = makeMove(jumped, { row: 2, col: 2 })

      expect(branched.history).toHaveLength(3)
      expect(branched.currentMoveIndex).toBe(2)
    })
  })

  describe('jumpTo', () => {
    it('updates currentMoveIndex and sets nextPlayer based on move index parity', () => {
      const state0 = createInitialGameState(3, 'X')
      const state1 = makeMove(state0, { row: 0, col: 0 })
      const state2 = makeMove(state1, { row: 0, col: 1 })

      const jumped0 = jumpTo(state2, 0)
      expect(jumped0.currentMoveIndex).toBe(0)
      expect(jumped0.nextPlayer).toBe('X')

      const jumped1 = jumpTo(state2, 1)
      expect(jumped1.currentMoveIndex).toBe(1)
      expect(jumped1.nextPlayer).toBe('O')
    })

    it('throws when move index is out of range', () => {
      const state = createInitialGameState(3, 'X')
      expect(() => jumpTo(state, -1)).toThrow('Move index is out of range.')
      expect(() => jumpTo(state, 1)).toThrow('Move index is out of range.')
    })

    it('does not mutate the original state object', () => {
      const state0: GameState = createInitialGameState(3, 'X')
      const jumped = jumpTo(state0, 0)
      expect(jumped).not.toBe(state0)
    })

    it('derives nextPlayer relative to startingPlayer', () => {
      const state0 = createInitialGameState(3, 'O')
      const state1 = makeMove(state0, { row: 0, col: 0 })

      const jumped0 = jumpTo(state1, 0)
      expect(jumped0.nextPlayer).toBe('O')

      const jumped1 = jumpTo(state1, 1)
      expect(jumped1.nextPlayer).toBe('X')
    })
  })
})
