import './App.css'

import { GameBoard } from '../features/boardgame/components/GameBoard'
import { StatusBar } from '../features/boardgame/components/StatusBar'

function App() {
  const boardSize = 3
  const squares = Array.from({ length: boardSize * boardSize }, () => null as null | 'X' | 'O')

  const statusText = 'Next player: X'

  function handleSquareClick(row: number, col: number) {
    void row
    void col
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
          <GameBoard boardSize={boardSize} squares={squares} onSquareClick={handleSquareClick} />
        </section>
      </main>
    </div>
  )
}

export default App
