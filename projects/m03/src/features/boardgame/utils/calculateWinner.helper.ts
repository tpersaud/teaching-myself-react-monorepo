import type { Board } from "../types";

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