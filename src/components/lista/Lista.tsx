import React from 'react'
import './Lista.scss'

function Lista() {

    const tarefas = [{
        tarefa: 'React',
        tempo: '02:00:00'
    }, {
        tarefa: 'Java',
        tempo: '01:00:00'
    }, {
        tarefa: 'Spring',
        tempo: '00:30:00'
    }]

    return (
        <>
            <aside className='lista'>
                <h2 className='lista_titulo'>Estudos do Dia</h2>
                <ul className='lista_tarefas'>
                    {tarefas.map((item, index) => (
                        <li key={index} className='tarefas'>
                            <h3 className='tarefas_item'>{item.tarefa}</h3>
                            <span className='tarefas_item'>{item.tempo}</span>
                        </li>
                    ))}
                </ul>
            </aside>
        </>
    )
}

export default Lista