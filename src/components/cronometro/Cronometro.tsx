import React, { useState } from 'react'
import style from './Cronometro.module.scss'
import Botao from '../botao/Botao'
import Relogio from './relogio/Relogio'
import { ITarefas } from '../../types/tarefa'
import { tempoParaSegundos } from '../../common/utils/time'

interface Props {
  selecionado : ITarefas | undefined;
}

function Cronometro({selecionado} : Props) {
  const [tempo, setTempo] = useState<number>();
  if(selecionado?.tempo){
    setTempo(tempoParaSegundos(selecionado.tempo));
  }
  return (
    <div className={style.cronometro}>
        <span>Escolha uma tarefa e inicie o Cronômetro</span>
        <Relogio/>
        <Botao>Começar</Botao>
    </div>
  )
}

export default Cronometro