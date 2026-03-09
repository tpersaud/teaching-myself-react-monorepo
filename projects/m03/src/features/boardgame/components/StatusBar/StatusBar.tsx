import type { ReactNode } from 'react'

type StatusBarProps = {
  status: ReactNode
  onReset: () => void
}

export function StatusBar({ status, onReset }: StatusBarProps) {
  return (
    <>
      <div className="tttStatus" role="status" aria-live="polite">
        {status}
      </div>
      <div className="tttControls">
        <button type="button" className="tttButton" onClick={onReset}>
          Reset
        </button>
      </div>
    </>
  )
}
