import type { Board } from './board.types'
import type { PlayerMark } from './squareValue.types'

export type GameState = {
  history: Board[]
  currentMoveIndex: number
  nextPlayer: PlayerMark
}
