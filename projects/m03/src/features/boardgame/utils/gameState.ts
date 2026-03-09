import type { Board, GameState, PlayerMark, Position } from '../types'
import { calculateWinner } from './calculateWinner'
import { getBoardSize } from './calculateWinner.helper'

function createEmptyBoard(size: number): Board {
  return Array.from({ length: size }, () => Array.from({ length: size }, () => null))
}

function togglePlayer(player: PlayerMark): PlayerMark {
  return player === 'X' ? 'O' : 'X'
}

function getNextPlayerForMoveIndex(moveIndex: number, startingPlayer: PlayerMark): PlayerMark {
  if (moveIndex % 2 === 0) {
    return startingPlayer
  }
  return togglePlayer(startingPlayer)
}

export function createInitialGameState(size: number, startingPlayer: PlayerMark): GameState {
  if (size <= 0) {
    throw new Error('Board size must be greater than 0.')
  }

  const board = createEmptyBoard(size)

  return {
    history: [board],
    currentMoveIndex: 0,
    startingPlayer,
    nextPlayer: startingPlayer,
  }
}

export function jumpTo(state: GameState, moveIndex: number): GameState {
  if (moveIndex < 0 || moveIndex >= state.history.length) {
    throw new Error('Move index is out of range.')
  }

  return {
    ...state,
    currentMoveIndex: moveIndex,
    nextPlayer: getNextPlayerForMoveIndex(moveIndex, state.startingPlayer),
  }
}

export function makeMove(state: GameState, position: Position): GameState {
  const board = state.history[state.currentMoveIndex]
  const size = getBoardSize(board)

  if (position.row < 0 || position.row >= size || position.col < 0 || position.col >= size) {
    throw new Error('Move position is out of bounds.')
  }

  const result = calculateWinner(board)
  if (result.kind !== 'inProgress') {
    throw new Error('Cannot make a move: game is already over.')
  }

  if (board[position.row][position.col] !== null) {
    throw new Error('Cannot make a move: square is already occupied.')
  }

  const nextBoard: Board = board.map((row, rowIndex) =>
    row.map((square, colIndex) => {
      if (rowIndex === position.row && colIndex === position.col) {
        return state.nextPlayer
      }
      return square
    })
  )

  const nextHistory = state.history.slice(0, state.currentMoveIndex + 1)
  nextHistory.push(nextBoard)

  return {
    history: nextHistory,
    currentMoveIndex: state.currentMoveIndex + 1,
    startingPlayer: state.startingPlayer,
    nextPlayer: togglePlayer(state.nextPlayer),
  }
}
