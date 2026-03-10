
import type { PlayerMark, Position } from '../../boardgame/types'

import type { BoardSize } from './scoreboard.types'

export type MoveEntry = {
  player: PlayerMark
  position: Position
}

export type CompletedMatch = {
  id: string
  boardSize: BoardSize
  startingPlayer: PlayerMark
  endedAt: number
  resultKind: 'winner' | 'draw'
  winner?: PlayerMark
  moves: MoveEntry[]
}

export type MatchHistoryBySize = Record<BoardSize, CompletedMatch[]>
