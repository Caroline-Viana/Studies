import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Botao from './components/botao/Botao'
import Formulario from './components/formulario/Formulario'
import Lista from './components/lista/Lista'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <div className='AppStyle'>
        <Formulario/>
        <Lista/>
      </div>
    </div>
  )
}

export default App
