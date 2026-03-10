import './App.css'

import { GameBoard } from '../features/boardgame/components/GameBoard'
import { StatusBar } from '../features/boardgame/components/StatusBar'
import type { PlayerMark } from '../features/boardgame/types'
import { useTicTacToe } from '../features/boardgame/hooks/useTicTacToe'

function App() {
  const boardSize = 3;
  const currentPlayer: PlayerMark = 'X';

  const {
    board,
    statusText,
    onSquareClick,
    resetGame,
  } = useTicTacToe(boardSize, currentPlayer);

  return (
    <div className="tttApp">
      <header className="tttHeader">
        <h1 className="tttTitle">Tic-Tac-Toe Plus</h1>
      </header>

      <main className="tttMain">
        <section className="tttPanel" aria-label="Game status">
          <StatusBar status={statusText} onReset={resetGame} />
        </section>

        <section className="tttPanel" aria-label="Game board">
          <GameBoard board={board} onSquareClick={onSquareClick} />
        </section>
      </main>
    </div>
  )
}

export default App
