import './App.css'

import { GameBoard } from '../features/boardgame/components/GameBoard'
import { StatusBar } from '../features/boardgame/components/StatusBar'
import type { Board, GameResult, PlayerMark, Position } from '../features/boardgame/types'
import { createBoard } from '../features/boardgame/utils/boardCommands/createBoard'
import { useMemo, useState } from 'react'
import { calculateWinner } from '../features/boardgame/utils/calculateWinner'
import { applyMove } from '../features/boardgame/utils/boardCommands/applyMove'
import { canMakeMove } from '../features/boardgame/utils/boardCommands/canMakeMove'
import { getNextPlayer } from '../features/boardgame/utils/boardCommands/getNextPlayer'

function App() {
  const boardSize = 3
  const startingPlayer: PlayerMark = 'X';

  const [board, setBoard] = useState<Board>(() => createBoard(boardSize));
  const [nextPlayer, setNextPlayer] = useState<PlayerMark>(startingPlayer);
  const result = useMemo<GameResult>(() => calculateWinner(board), [board]);

  function handleSquareClick(position: Position): void {
    if (result.kind !== 'inProgress') {
      return
    }

    if (!canMakeMove(board, position)) {
      return
    }

    const newBoard = applyMove(board, position, nextPlayer)
    setBoard(newBoard)
    setNextPlayer(getNextPlayer(nextPlayer))
  }

  function handleResetClick() {
    setBoard(createBoard(boardSize));
    setNextPlayer(startingPlayer);
  }

  function getStatusText(result: GameResult, nextPlayer: PlayerMark): string {
    switch (result.kind) {
      case 'winner':
        return `Winner: ${result.winner}`

      case 'draw':
        return 'Draw'

      case 'inProgress':
        return `Next player: ${nextPlayer}`

      default: {
        const exhaustiveCheck: never = result
        return exhaustiveCheck
      }
    }
  }

  const statusText = getStatusText(result, nextPlayer);

  return (
    <div className="tttApp">
      <header className="tttHeader">
        <h1 className="tttTitle">Tic-Tac-Toe Plus</h1>
      </header>

      <main className="tttMain">
        <section className="tttPanel" aria-label="Game status">
          <StatusBar status={statusText} onReset={handleResetClick} />
        </section>

        <section className="tttPanel" aria-label="Game board">
          <GameBoard board={board} onSquareClick={handleSquareClick} />
        </section>
      </main>
    </div>
  )
}

export default App
