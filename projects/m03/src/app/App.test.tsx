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
})
