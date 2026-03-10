import './App.css'

import { GameBoard } from '../features/boardgame/components/GameBoard'
import { GameStatus } from '../features/boardgame/components/GameStatus'
import type { PlayerMark } from '../features/boardgame/types'
import { useTicTacToe } from '../features/boardgame/hooks/useTicTacToe'

function App() {
  const boardSize = 3;
  const startingPlayer: PlayerMark = 'X';

  const {
    board,
    result,
    statusText,
    onSquareClick,
    resetGame,
  } = useTicTacToe(boardSize, startingPlayer);

  return (
    <div className="tttApp">
      <header className="tttHeader">
        <h1 className="tttTitle">Tic-Tac-Toe Plus</h1>
      </header>

      <main className="tttMain">
        <section className="tttPanel" aria-label="Game status">
          <GameStatus status={statusText} onReset={resetGame} />
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
