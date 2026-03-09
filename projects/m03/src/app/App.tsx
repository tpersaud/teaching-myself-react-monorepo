import './App.css'

import { GameBoard } from '../features/boardgame/components/GameBoard'
import { StatusBar } from '../features/boardgame/components/StatusBar'
import type { Position, SquareValue } from '../features/boardgame/types'

function App() {
  const boardSize = 3
  const board = Array.from({ length: boardSize }, () =>
    Array.from({ length: boardSize }, () => null as SquareValue),
  )

  const statusText = 'Next player: X'

  function handleSquareClick(position: Position) {
    void position
  }

  function handleResetClick() {}

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
