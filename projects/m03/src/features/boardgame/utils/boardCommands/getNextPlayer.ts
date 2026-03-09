import type { PlayerMark } from '../../types'

export function getNextPlayer(player: PlayerMark): PlayerMark {
  return player === 'X' ? 'O' : 'X'
}
