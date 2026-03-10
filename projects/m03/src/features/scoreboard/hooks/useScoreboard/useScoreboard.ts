import { useCallback, useEffect, useMemo, useState } from 'react'

import type { GameResult, PlayerMark } from '../../../boardgame/types'

import type { CompletedMatch, MatchHistoryBySize, MoveEntry, ScoreboardStore } from '../../types'
import {
  createEmptyScoreboard,
  createEmptyScoreCounts,
  type BoardSize,
} from '../../types'

const STORAGE_KEY = 'ttt:scoreboard-store:v1'

function createEmptyMatchHistoryBySize(): MatchHistoryBySize {
  return { 3: [], 4: [], 5: [] }
}

function createEmptyStore(): ScoreboardStore {
  return {
    scoreboard: createEmptyScoreboard(),
    matchHistoryBySize: createEmptyMatchHistoryBySize(),
  }
}

function readStoreFromStorage(): ScoreboardStore {
  if (typeof window === 'undefined') {
    return createEmptyStore()
  }

  const raw = window.localStorage.getItem(STORAGE_KEY)
  if (!raw) {
    return createEmptyStore()
  }

  try {
    const parsed = JSON.parse(raw) as Partial<ScoreboardStore>

    const empty = createEmptyStore()
    return {
      scoreboard: parsed.scoreboard ?? empty.scoreboard,
      matchHistoryBySize: parsed.matchHistoryBySize ?? empty.matchHistoryBySize,
    }
  } catch {
    return createEmptyStore()
  }
}

function writeStoreToStorage(store: ScoreboardStore): void {
  if (typeof window === 'undefined') {
    return
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(store))
}

function ensureBoardSize(boardSize: number): BoardSize {
  if (boardSize === 3 || boardSize === 4 || boardSize === 5) {
    return boardSize
  }

  return 3
}

type RecordCompletedMatchArgs = {
  gameId: string
  boardSize: number
  startingPlayer: PlayerMark
  result: GameResult
  moves: MoveEntry[]
}

export function useScoreboard() {
  const [store, setStore] = useState<ScoreboardStore>(() => readStoreFromStorage())

  useEffect(() => {
    writeStoreToStorage(store)
  }, [store])

  const recordCompletedMatch = useCallback((args: RecordCompletedMatchArgs) => {
    const size = ensureBoardSize(args.boardSize)

    const { result } = args

    if (result.kind !== 'winner' && result.kind !== 'draw') {
      return
    }

    const match: CompletedMatch = {
      id: args.gameId,
      boardSize: size,
      startingPlayer: args.startingPlayer,
      endedAt: Date.now(),
      resultKind: result.kind,
      winner: result.kind === 'winner' ? result.winner : undefined,
      moves: args.moves,
    }

    setStore((prev) => {
      const nextGlobal = { ...prev.scoreboard.global }
      const nextBySize = { ...prev.scoreboard.bySize }
      const nextSizeCounts = { ...(nextBySize[size] ?? createEmptyScoreCounts()) }

      nextGlobal.gamesPlayed += 1
      nextSizeCounts.gamesPlayed += 1

      switch (result.kind) {
        case 'draw': {
          nextGlobal.draws += 1
          nextSizeCounts.draws += 1
          break
        }

        case 'winner': {
          if (result.winner === 'X') {
            nextGlobal.xWins += 1
            nextSizeCounts.xWins += 1
          } else {
            nextGlobal.oWins += 1
            nextSizeCounts.oWins += 1
          }
          break
        }
      }

      nextBySize[size] = nextSizeCounts

      const prevHistoryForSize = prev.matchHistoryBySize[size] ?? []
      const nextHistoryForSize = [match, ...prevHistoryForSize]

      return {
        scoreboard: {
          global: nextGlobal,
          bySize: nextBySize,
        },
        matchHistoryBySize: {
          ...prev.matchHistoryBySize,
          [size]: nextHistoryForSize,
        },
      }
    })
  }, [])

  const scoreboard = useMemo(() => store.scoreboard, [store.scoreboard])
  const matchHistoryBySize = useMemo(() => store.matchHistoryBySize, [store.matchHistoryBySize])

  return {
    scoreboard,
    matchHistoryBySize,
    recordCompletedMatch,
  }
}
