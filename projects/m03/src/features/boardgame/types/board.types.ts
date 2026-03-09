import type { SquareValue } from './squareValue.types'

export type Board = SquareValue[][]

export type Position = {
  row: number
  col: number
}