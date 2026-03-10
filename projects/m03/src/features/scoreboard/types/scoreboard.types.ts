import type { MatchHistoryBySize } from './historyEntry.types'

export type BoardSize = 3 | 4 | 5

export type ScoreCounts = {
  xWins: number
  oWins: number
  draws: number
  gamesPlayed: number
}

export type Scoreboard = {
  global: ScoreCounts
  bySize: Record<BoardSize, ScoreCounts>
}

export type ScoreboardStore = {
  scoreboard: Scoreboard
  matchHistoryBySize: MatchHistoryBySize
}

export function createEmptyScoreCounts(): ScoreCounts {
  return { xWins: 0, oWins: 0, draws: 0, gamesPlayed: 0 }
}

export function createEmptyScoreboard(): Scoreboard {
  return {
    global: createEmptyScoreCounts(),
    bySize: {
      3: createEmptyScoreCounts(),
      4: createEmptyScoreCounts(),
      5: createEmptyScoreCounts(),
    },
  }
}
