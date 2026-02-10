import './App.css'
import ColorControls from './components/ColorControls'
import ColorPreview from './components/ColorPreview'

function App() {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="app">
        <header>
        <h1>Hello World</h1>
        </header>
        <main>
          <ColorControls />
          <ColorPreview />
        </main>
        <footer>
          <p>© {year} Color Picker Capstone</p>
        </footer>
      </div>
    </>
  )
}

export default App
