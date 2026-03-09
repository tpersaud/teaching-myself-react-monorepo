import type { Board, GameResult, PlayerMark } from "../types";
import {
  getBoardSize,
  getWinningLines,
  isBoardFull,
  isWinningLine,
  validateWinningMarks,
} from "./calculateWinner.helper";

export function calculateWinner(board: Board): GameResult {
  getBoardSize(board);

  const winningLines = getWinningLines(board).filter(isWinningLine);
  const winningMarks = winningLines.map(line => line[0]as PlayerMark);

  validateWinningMarks(winningMarks);

  if (winningMarks.length > 0) {
    return {
      kind: "winner",
      winner: winningMarks[0],
    };
  }
  if (isBoardFull(board)) {
    return { kind: "draw" };
  }

  return { kind: "inProgress" };
}