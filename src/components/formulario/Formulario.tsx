import React, { Component } from 'react'
import style from './Formulario.module.scss'
import Botao from '../botao/Botao'
import { ITarefas } from '../../types/tarefa'
import { v4 as uuidv4 } from 'uuid'; 

export default class Formulario extends Component <{setTarefas: React.Dispatch<React.SetStateAction<ITarefas[]>>}>{

  state = {
    tarefa: "",
    tempo: "00:00"
  }

  adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    this.props.setTarefas(tarefasAntigas => 
      [
        ...tarefasAntigas, 
        {
          ...this.state,
          selecionado: false,
          completado: false,
          id: uuidv4()
        }
      ]
    );
    this.setState({
      tarefa: "",
      tempo: "00:00"
    });
  }

  render() {
    return (
      <form className={style.formulario_tarefa} onSubmit={this.adicionarTarefa.bind(this)}>
        <div className={style.formulario_tarefa_opcao}>
          <label htmlFor='tarefa' className={style.opcao_item}>Adicione um novo estudo</label>
          <input
            type='texte'
            name='tarefa'
            id='tarefa'
            value={this.state.tarefa}
            onChange={evento => this.setState({ ...this.state, tarefa: evento.target.value })}
            className={style.opcao_item_input}
            placeholder='O que você quer estudar...'
            required></input>
        </div>
        <div className={style.formulario_tarefa_opcao}>
          <label htmlFor='tempo' className={style.opcao_item}>Tempo</label>
          <input
            type='time'
            step="1"
            name='tempo'
            id='tempo'
            value={this.state.tempo}
            onChange={evento => this.setState({ ...this.state, tempo: evento.target.value })}
            className={style.opcao_item_input}
            min="00:00:00"
            max="01:30:00"
            required></input>
        </div>
        <Botao type="submit">Adicionar</Botao>
      </form>
    )
  }
}