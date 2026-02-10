import './ColorPreview.css'
import { hexToHex6 } from '../utils/color';

function ColorPreview(props: { hex: string }) {
  const inputHex = hexToHex6(props.hex) ?? "#000000";

  return (
    <section className="color-preview">
      <h2 className="color-preview-title">Color Preview</h2>
      <input id="color-preview-swatch" type="color" className="color-preview-swatch" value={inputHex}/>
      <label htmlFor="color-preview-swatch" className="color-preview-label">Color Displayed</label>
      <div className="color-preview-meta">
        <div className="color-preview-hex">{inputHex}</div>
      </div>
    </section>
  )
}

export default ColorPreview
