import React from 'react'
import Botao from '../botao/Botao'
import './Formulario.scss'

function Formulario() {
  return (
    <>
        <form className='formulario_tarefa'>
            <div className='formulario_tarefa-opcao'>
                <label htmlFor='tarefa' className='opcao_item'>Adicione um novo estudo</label>
                <input type='texte' name='tarefa' id='tarefa' className='opcao_item-input' placeholder='O que você quer estudar...' required></input>
            </div>
            <div className='formulario_tarefa-opcao'>
                <label htmlFor='tempo' className='opcao_item'>Tempo</label>
                <input type='time' step="1" name='tempo' id='tempo' className='opcao_item-input' min="00:00:00" max="01:30:00" required></input>
            </div>
            <Botao/>
        </form>
    </>
  )
}

export default Formulario