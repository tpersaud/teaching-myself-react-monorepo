import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it } from 'vitest'

import App from './App'

afterEach(() => {
  cleanup()
})

describe('App (UI integration)', () => {
  it('renders initial status', () => {
    render(<App />)
    expect(screen.getByTestId('ttt-status')).toHaveTextContent('Next player: X')
  })

  it('places a mark and toggles next player', async () => {
    const user = userEvent.setup()
    render(<App />)

    const square00 = screen.getByTestId('ttt-square-0-0')

    await user.click(square00)

    expect(square00).toHaveTextContent('X')
    expect(screen.getByTestId('ttt-status')).toHaveTextContent('Next player: O')
  })

  it('does not allow clicking an occupied square', async () => {
    const user = userEvent.setup()
    render(<App />)

    const square00 = screen.getByTestId('ttt-square-0-0')

    await user.click(square00)
    expect(square00).toHaveTextContent('X')

    await user.click(square00)
    expect(square00).toHaveTextContent('X')
  })

  it('reset clears the board and status', async () => {
    const user = userEvent.setup()
    render(<App />)

    const square00 = screen.getByTestId('ttt-square-0-0')
    await user.click(square00)
    expect(square00).toHaveTextContent('X')

    await user.click(screen.getByTestId('ttt-reset'))

    expect(screen.getByTestId('ttt-square-0-0')).toHaveTextContent(/^\s*$/)
    expect(screen.getByTestId('ttt-status')).toHaveTextContent('Next player: X')
  })

  it('changes board size (3x3, 4x4, 5x5) by remounting the game', async () => {
    const user = userEvent.setup()
    render(<App />)

    expect(screen.queryByTestId('ttt-square-3-3')).not.toBeInTheDocument()
    expect(screen.queryByTestId('ttt-square-4-4')).not.toBeInTheDocument()

    const boardSizeSelect = screen.getByLabelText(/board size/i)

    await user.selectOptions(boardSizeSelect, '4')
    expect(screen.getByTestId('ttt-square-3-3')).toBeInTheDocument()
    expect(screen.queryByTestId('ttt-square-4-4')).not.toBeInTheDocument()

    await user.selectOptions(boardSizeSelect, '5')
    expect(screen.getByTestId('ttt-square-4-4')).toBeInTheDocument()

    await user.selectOptions(boardSizeSelect, '3')
    expect(screen.queryByTestId('ttt-square-3-3')).not.toBeInTheDocument()
  })

  it('changes starting player (X/O) by remounting the game', async () => {
    const user = userEvent.setup()
    render(<App />)

    expect(screen.getByTestId('ttt-status')).toHaveTextContent('Next player: X')

    await user.click(screen.getByTestId('ttt-square-0-0'))
    expect(screen.getByTestId('ttt-square-0-0')).toHaveTextContent('X')
    expect(screen.getByTestId('ttt-status')).toHaveTextContent('Next player: O')

    const startingPlayerSelect = screen.getByLabelText(/starting player/i)
    await user.selectOptions(startingPlayerSelect, 'O')

    expect(screen.getByTestId('ttt-square-0-0')).toHaveTextContent(/^[\s]*$/)
    expect(screen.getByTestId('ttt-status')).toHaveTextContent('Next player: O')
  })
})
