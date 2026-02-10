import { useState } from 'react';
import './App.css'
import ColorControls from './components/ColorControls'
import ColorPreview from './components/ColorPreview'

function App() {
  const year = new Date().getFullYear();
  const defaultColorInHexidecimal = "#000000" as string;

  const [color, setColor] = useState(defaultColorInHexidecimal);

  return (
    <>
      <div className="app">
        <header>
        <h1>Hello World</h1>
        </header>
        <main>
          <ColorControls hex={color} defaultHexValue={defaultColorInHexidecimal} onHexChange={setColor}/>
          <ColorPreview hex={color} onColorChange={setColor}/>
        </main>
        <footer>
          <p>© {year} Color Picker Capstone</p>
        </footer>
      </div>
    </>
  )
}

export default App
