import { describe, expect, it } from 'vitest'

import type { Board } from '../../types'
import { createBoard } from './createBoard'

describe('createBoard', () => {
  it('creates an empty 3x3 board', () => {
    const board: Board = createBoard(3)

    expect(board).toEqual([
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ])
  })

  it('creates an empty 4x4 board', () => {
    const board: Board = createBoard(4)

    expect(board).toEqual([
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
    ])
  })

  it('throws when size is 0 or negative', () => {
    expect(() => createBoard(0)).toThrow('Board size must be greater than 0.')
    expect(() => createBoard(-1)).toThrow('Board size must be greater than 0.')
  })

  it('returns a new board instance each call', () => {
    const board1 = createBoard(3)
    const board2 = createBoard(3)

    expect(board1).not.toBe(board2)
    expect(board1[0]).not.toBe(board2[0])
  })
})
