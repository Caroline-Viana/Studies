import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import style from './App.module.scss'
import Botao from './components/botao/Botao'
import Formulario from './components/formulario/Formulario'
import Lista from './components/lista/Lista'
import Cronometro from './components/cronometro/Cronometro'
import { ITarefas } from './types/tarefa'

function App() {

  const [tarefas, setTarefas] = useState<ITarefas[] | []>([]);
  const [selecionado, setSelecionado] = useState<ITarefas>();

  function selecionaTarefa(tarefaSelecionada: ITarefas) {
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id ===tarefaSelecionada.id ? true : false
    })));
  }
  return (
    <div className='App'>
      <div className={style.AppStyle}>
        <div className={style.app_form}>
          <Formulario setTarefas={setTarefas} />
          <Cronometro selecionado={selecionado}/>
        </div>
        <Lista
          tarefas={tarefas}
          selecionaTarefa={selecionaTarefa}
        />
      </div>
    </div>
  )
}

export default App
