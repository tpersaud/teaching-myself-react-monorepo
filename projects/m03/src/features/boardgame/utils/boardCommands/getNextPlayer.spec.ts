import { describe, expect, it } from 'vitest'

import { getNextPlayer } from './getNextPlayer'

describe('getNextPlayer', () => {
  it('returns O when current player is X', () => {
    expect(getNextPlayer('X')).toBe('O')
  })

  it('returns X when current player is O', () => {
    expect(getNextPlayer('O')).toBe('X')
  })
})
