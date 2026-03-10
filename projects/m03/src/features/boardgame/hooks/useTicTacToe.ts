import { useMemo, useState } from "react";
import type { Board, GameResult, PlayerMark, Position } from "../types";
import { calculateWinner } from "../utils/calculateWinner";
import { canMakeMove } from "../utils/boardCommands/canMakeMove";
import { createBoard } from "../utils/boardCommands/createBoard";
import { applyMove } from "../utils/boardCommands/applyMove";
import { getNextPlayer } from "../utils/boardCommands/getNextPlayer";

export function useTicTacToe(boardSize: number, startingPlayer: PlayerMark) {
  const [board, setBoard] = useState<Board>(() => createBoard(boardSize));
  const [currentPlayer, setCurrentPlayer] = useState<PlayerMark>(startingPlayer);
  const result = useMemo<GameResult>(() => calculateWinner(board), [board]);

  function onSquareClick(position: Position): void {
    if (result.kind !== 'inProgress' || !canMakeMove(board, position)) {
      return
    }

    const newBoard = applyMove(board, position, currentPlayer)
    setBoard(newBoard)
    setCurrentPlayer(getNextPlayer(currentPlayer))
  }

  function resetGame(): void {
    setBoard(createBoard(boardSize));
    setCurrentPlayer(startingPlayer);
  }

  function getStatusText(): string {
    switch (result.kind) {
      case 'winner':
        return `Winner: ${result.winner}`

      case 'draw':
        return 'Draw'

      case 'inProgress':
        return `Next player: ${currentPlayer}`

      default: {
        const exhaustiveCheck: never = result
        return exhaustiveCheck
      }
    }
  }

  return {
    board,
    currentPlayer,
    result,
    statusText: getStatusText(),
    onSquareClick,
    resetGame
  };
}