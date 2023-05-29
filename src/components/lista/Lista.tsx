import React, { useState } from 'react'
import style from './Lista.module.scss'
import Item from './item/Item'
import { ITarefas } from '../../types/tarefa'

interface Props {
    tarefas: ITarefas[],
    selecionaTarefa: (tarefaSelecionada: ITarefas) => void
}

function Lista({ tarefas, selecionaTarefa }: Props) {
    return (
        <>
            <aside className={style.lista}>
                <h2 className={style.lista_titulo}>Estudos do Dia</h2>
                <ul className={style.lista_tarefas}>
                    {tarefas.map(item => (
                        <Item 
                        selecionaTarefa={selecionaTarefa}
                        key={item.id} {...item}/>
                    ))}
                </ul>
            </aside>
        </>
    )
}

export default Lista