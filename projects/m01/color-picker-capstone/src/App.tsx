import { useState } from 'react';
import './App.css'
import ColorControls from './components/ColorControls'
import ColorPreview from './components/ColorPreview'
import { normalizeHex } from './utils/color';

function App() {
  const year = new Date().getFullYear();
  const defaultColorInHexidecimal = "#000000" as string;

  const [hexInput, setHexInput] = useState(defaultColorInHexidecimal);
  const [color, setColor] = useState(defaultColorInHexidecimal);

  const isHexInputValid = normalizeHex(hexInput) !== null;

  function setHexInputText(text: string) {
    setHexInput(text);

    const normalized = normalizeHex(text);
    if (normalized !== null) {
      setColor(normalized);
    }
  }

  function handleColorChange(next: string) {
    setColor(next);
    setHexInput(next);
  }

  return (
    <>
      <div className="app">
        <header>
        <h1>Hello World</h1>
        </header>
        <main>
          <ColorControls hex={color} defaultHexValue={defaultColorInHexidecimal} hexInput={hexInput} onHexInputChange={setHexInputText}/>
          <ColorPreview hex={color} isHexInputValid={isHexInputValid} onColorChange={handleColorChange}/>
        </main>
        <footer>
          <p>© {year} Color Picker Capstone</p>
        </footer>
      </div>
    </>
  )
}

export default App
