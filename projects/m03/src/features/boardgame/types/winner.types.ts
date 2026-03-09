import type { PlayerMark } from './squareValue.types'

export type GameResult =
  | { kind: 'inProgress' }
  | { kind: 'draw' }
  | { kind: 'winner'; winner: PlayerMark }