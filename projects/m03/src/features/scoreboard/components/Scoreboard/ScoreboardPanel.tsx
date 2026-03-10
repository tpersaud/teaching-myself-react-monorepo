import type { Scoreboard } from '../../types'

type ScoreboardPanelProps = {
  scoreboard: Scoreboard
}

export function ScoreboardPanel({ scoreboard }: ScoreboardPanelProps) {
  return (
    <div>
      <div>
        <strong>Global</strong>
      </div>
      <div>
        X: {scoreboard.global.xWins} | O: {scoreboard.global.oWins} | Draws: {scoreboard.global.draws} | Games:{' '}
        {scoreboard.global.gamesPlayed}
      </div>

      <div style={{ marginTop: '0.75rem' }}>
        <strong>By board size</strong>
      </div>
      <div>
        <div>3x3 — X: {scoreboard.bySize[3].xWins} | O: {scoreboard.bySize[3].oWins} | Draws: {scoreboard.bySize[3].draws} | Games: {scoreboard.bySize[3].gamesPlayed}</div>
        <div>4x4 — X: {scoreboard.bySize[4].xWins} | O: {scoreboard.bySize[4].oWins} | Draws: {scoreboard.bySize[4].draws} | Games: {scoreboard.bySize[4].gamesPlayed}</div>
        <div>5x5 — X: {scoreboard.bySize[5].xWins} | O: {scoreboard.bySize[5].oWins} | Draws: {scoreboard.bySize[5].draws} | Games: {scoreboard.bySize[5].gamesPlayed}</div>
      </div>
    </div>
  )
}
