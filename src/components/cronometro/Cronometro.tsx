import React, { useEffect, useState } from 'react'
import style from './Cronometro.module.scss'
import Botao from '../botao/Botao'
import Relogio from './relogio/Relogio'
import { ITarefas } from '../../types/tarefa'
import { tempoParaSegundos } from '../../common/utils/time'

interface Props {
  selecionado : ITarefas | undefined,
  finalizarTrefa : () => void;
}

function Cronometro({selecionado, finalizarTrefa} : Props) {
  const [tempo, setTempo] = useState<number>();

  useEffect(() => {
    if(selecionado?.tempo){
      setTempo(tempoParaSegundos(selecionado.tempo));
    }
  }, [selecionado]);

  function regressiva(contador: number = 0){
    setTimeout(() => {
      if(contador > 0){
        setTempo(contador - 1);
        return regressiva(contador - 1);
      }
      finalizarTrefa();
    }, 1000)
  }
  return (
    <div className={style.cronometro}>
        <span>Escolha uma tarefa e inicie o Cronômetro</span>
        <Relogio tempo={tempo}/>
        <Botao onClick={() => regressiva(tempo)}>Começar</Botao>
    </div>
  )
}

export default Cronometro