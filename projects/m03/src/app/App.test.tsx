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
    expect(screen.getByRole('status')).toHaveTextContent('Next player: X')
  })

  it('places a mark and toggles next player', async () => {
    const user = userEvent.setup()
    render(<App />)

    const squares = screen.getAllByRole('button').filter((btn) => btn.className.includes('tttSquare'))
    expect(squares.length).toBe(9)

    await user.click(squares[0]!)

    expect(squares[0]).toHaveTextContent('X')
    expect(screen.getByRole('status')).toHaveTextContent('Next player: O')
  })

  it('does not allow clicking an occupied square', async () => {
    const user = userEvent.setup()
    render(<App />)

    const squares = screen.getAllByRole('button').filter((btn) => btn.className.includes('tttSquare'))

    await user.click(squares[0]!)
    expect(squares[0]).toHaveTextContent('X')

    await user.click(squares[0]!)
    expect(squares[0]).toHaveTextContent('X')
  })

  it('reset clears the board and status', async () => {
    const user = userEvent.setup()
    render(<App />)

    const squares = screen.getAllByRole('button').filter((btn) => btn.className.includes('tttSquare'))
    await user.click(squares[0]!)
    expect(squares[0]).toHaveTextContent('X')

    await user.click(screen.getByRole('button', { name: /^reset$/i }))

    const squaresAfterReset = screen.getAllByRole('button').filter((btn) => btn.className.includes('tttSquare'))
    expect(squaresAfterReset[0]).toHaveTextContent(/^\s*$/)
    expect(screen.getByRole('status')).toHaveTextContent('Next player: X')
  })
})
