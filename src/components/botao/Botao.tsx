import React, { Component } from 'react'
import style from './Botao.module.scss'

export default class Botao extends Component<{type?: "button" | "submit" | "reset" | undefined}>{
  render() {
    const { type = "button"} = this.props;
    return (
      <>
        <button type={type} className={style.botao_enviar}>{this.props.children}</button>
      </>
    )
  }
}