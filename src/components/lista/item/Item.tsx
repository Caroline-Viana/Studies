import React from 'react'
import style from '../Lista.module.scss'
import { ITarefas } from '../../../types/tarefa'

interface Props extends ITarefas{
    selecionaTarefa: (tarefaSelecionada: ITarefas) => void
}

function Item({ tarefa, tempo, selecionado, completado, id, selecionaTarefa}: Props) {
    return (
        <li className={`${style.tarefas} ${selecionado ? style.itemSelecionado : ''}`} onClick={() => selecionaTarefa({
            tarefa,
            tempo,
            selecionado,
            completado,
            id
        })}>
            <h3 className={style.tarefas_item}>{tarefa}</h3>
            <span className={style.tarefas_item}>{tempo}</span>
        </li>
    )
}

export default Item