import type { Board, SquareValue } from "../types";

export function getBoardSize(board: Board): number {
    const rowCount = board.length;

    if (rowCount === 0) {
        throw new Error('Board cannot be empty.')
    }

    const columnCount = board[0].length;

    if (columnCount === 0) {
        throw new Error('Board rows cannot be empty.')
    }

    const isRectangular = board.every((row) => row.length === columnCount)

    if (!isRectangular) {
        throw new Error('Board rows must all have the same length.')
    }

    if (rowCount !== columnCount) {
        throw new Error('Board must be an NxN grid.')
    }

    return rowCount;
}

export const isLineEmpty = (line: SquareValue[]): boolean =>
  line.every((square) => square === null);

export const isWinningLine = (line: SquareValue[]): boolean =>
  line.length > 0 && line[0] !== null && line.every(square => square === line[0]);