import './ColorControls.css'

function ColorControls(props: { hex: string, defaultHex: string, onHexChange: (nextHex: string) => void }) {

  return (
    <section className="color-controls">
      <h2 className="color-controls-title">Color Controls</h2>
      <input id="color-controls-hex" type="text" value={props.hex} onChange={(e) => props.onHexChange(e.target.value)} />
      <label htmlFor="color-controls-hex" className="color-controls-label">Hex</label>
      <div className="color-controls-meta">
        <div className="color-controls-hex">{props.hex}</div>
      </div>
      <button type="reset" onClick={() => props.onHexChange(props.defaultHex)}>Reset To Default</button>
    </section>
  )
}

export default ColorControls
