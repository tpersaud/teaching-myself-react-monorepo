import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://es.vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://es.react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>¡Hola Mundo!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          cuenta is {count}
        </button>
        <p>
          Editar <code>src/App.tsx</code> y guardar a probar HMR
        </p>
      </div>
      <p className="read-the-docs">
        Haz click en los logos del Vite y React aprender más
      </p>
    </>
  )
}

export default App
