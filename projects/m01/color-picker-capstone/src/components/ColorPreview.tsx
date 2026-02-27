import './ColorPreview.css'
import { useState } from 'react';
import { hexToHex6 } from '../utils/color';

function ColorPreview(props: { hex: string, isHexInputValid: boolean, onColorChange: (next: string) => void }) {
  const inputHex = hexToHex6(props.hex) ?? "#000000";
  const [copied, setCopied] = useState(false);

  async function copyToClipboard() {
    await navigator.clipboard.writeText(props.hex);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1000);
  }

  return (
    <section className="color-preview">
      <h2 className="color-preview-title">Color Preview</h2>
      <input id="color-preview-swatch" type="color" className="color-preview-swatch" value={inputHex} onChange={(e) => props.onColorChange(e.target.value)}/>
      <label htmlFor="color-preview-swatch" className="color-preview-label">Color Displayed</label>
      <div className="color-preview-meta">
        <div className="color-preview-hex">{props.isHexInputValid ? inputHex : "Invalid"}</div>
        <button type="button" onClick={copyToClipboard}>
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </section>
  )
}

export default ColorPreview
