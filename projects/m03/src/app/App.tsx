import './App.css'

import { useEffect, useRef } from 'react'

import { GameBoard } from '../features/boardgame/components/GameBoard'
import { GameStatus } from '../features/boardgame/components/GameStatus'
import type { PlayerMark } from '../features/boardgame/types'
import { useTicTacToe } from '../features/boardgame/hooks/useTicTacToe'
import { ScoreboardPanel } from '../features/scoreboard/components'
import { useScoreboard } from '../features/scoreboard/hooks'

function App() {
  const boardSize = 3;
  const startingPlayer: PlayerMark = 'X';

  const {
    board,
    result,
    moves,
    gameId,
    statusText,
    onSquareClick,
    resetGame,
  } = useTicTacToe(boardSize, startingPlayer);

  const { scoreboard, recordCompletedMatch } = useScoreboard()
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
    <div className="tttApp">
      <header className="tttHeader">
        <h1 className="tttTitle">Tic-Tac-Toe Plus</h1>
      </header>

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
    </div>
  )
}

export default App
