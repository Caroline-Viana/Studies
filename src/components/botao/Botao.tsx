import React, { Component } from 'react'
import style from './Botao.module.scss'

export default class Botao extends Component<{
  type?: "button" | "submit" | "reset" | undefined,
  onClick?: () => void
}>{
  render() {
    const { type = "button", onClick} = this.props;
    return (
      <>
        <button onClick={onClick} type={type} className={style.botao_enviar}>{this.props.children}</button>
      </>
    )
  }
}