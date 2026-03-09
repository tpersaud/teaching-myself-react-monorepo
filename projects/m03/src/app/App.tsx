import './App.css'

import { Header } from '../shared/components/Header'
import { Section } from '../shared/components/Section'

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
      <Header title="Tic-Tac-Toe Plus" />

      <main className="tttMain">
        <Section ariaLabel="Game status">
          <div className="tttStatus" role="status" aria-live="polite">
            {statusText}
          </div>
          <div className="tttControls">
            <button type="button" className="tttButton" onClick={handleResetClick}>
              Reset
            </button>
          </div>
        </Section>

        <Section ariaLabel="Game board">
          <div
            className="tttBoard"
            style={{ gridTemplateColumns: `repeat(${boardSize}, 1fr)` }}
          >
            {squares.map((value, index) => {
              const row = Math.floor(index / boardSize)
              const col = index % boardSize

              return (
                <button
                  key={`${row}-${col}`}
                  type="button"
                  className="tttSquare"
                  data-row={row}
                  data-col={col}
                  onClick={() => handleSquareClick(row, col)}
                >
                  {value}
                </button>
              )
            })}
          </div>
        </Section>
      </main>
    </div>
  )
}

export default App
