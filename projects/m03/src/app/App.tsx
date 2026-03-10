import './App.css'

import { useEffect, useRef, useState } from 'react'

import { GameBoard } from '../features/boardgame/components/GameBoard'
import { GameStatus } from '../features/boardgame/components/GameStatus'
import type { PlayerMark } from '../features/boardgame/types'
import { useTicTacToe } from '../features/boardgame/hooks/useTicTacToe'
import { ScoreboardPanel } from '../features/scoreboard/components'
import { useScoreboard } from '../features/scoreboard/hooks'

type BoardSize = 3 | 4 | 5

type TicTacToeGameProps = {
  boardSize: BoardSize
  startingPlayer: PlayerMark
  recordCompletedMatch: ReturnType<typeof useScoreboard>['recordCompletedMatch']
  scoreboard: ReturnType<typeof useScoreboard>['scoreboard']
}

function TicTacToeGame({ boardSize, startingPlayer, recordCompletedMatch, scoreboard }: TicTacToeGameProps) {
  const {
    board,
    result,
    moves,
    gameId,
    statusText,
    onSquareClick,
    resetGame,
  } = useTicTacToe(boardSize, startingPlayer)

  const recordedGameIdsRef = useRef(new Set<string>())

  useEffect(() => {
    if (result.kind === 'inProgress') {
      return
    }

    if (recordedGameIdsRef.current.has(gameId)) {
      return
    }

    recordedGameIdsRef.current.add(gameId)
    recordCompletedMatch({ gameId, boardSize, startingPlayer, result, moves })
  }, [boardSize, gameId, moves, recordCompletedMatch, result, startingPlayer])

  return (
    <main className="tttMain">
      <section className="tttPanel" aria-label="Game status">
        <GameStatus status={statusText} onReset={resetGame} />
        <div style={{ marginTop: '1rem' }}>
          <ScoreboardPanel scoreboard={scoreboard} />
        </div>
      </section>

      <section className="tttPanel" aria-label="Game board">
        <GameBoard
          board={board}
          onSquareClick={onSquareClick}
          isDisabled={(position) => result.kind !== 'inProgress' || board[position.row]?.[position.col] != null}
        />
      </section>
    </main>
  )
}

function App() {
  const [boardSize, setBoardSize] = useState<BoardSize>(3)
  const startingPlayer: PlayerMark = 'X';

  const { scoreboard, recordCompletedMatch } = useScoreboard()

  return (
    <div className="tttApp">
      <header className="tttHeader">
        <h1 className="tttTitle">Tic-Tac-Toe Plus</h1>
      </header>

      <section className="tttPanel" aria-label="Game settings">
        <div className="tttControls">
          <label>
            Board size
            <select value={boardSize} onChange={(e) => setBoardSize(Number(e.target.value) as BoardSize)}>
              <option value={3}>3x3</option>
              <option value={4}>4x4</option>
              <option value={5}>5x5</option>
            </select>
          </label>
        </div>
      </section>

      <TicTacToeGame
        key={`game-${boardSize}-${startingPlayer}`}
        boardSize={boardSize}
        startingPlayer={startingPlayer}
        scoreboard={scoreboard}
        recordCompletedMatch={recordCompletedMatch}
      />
    </div>
  )
}

export default App
