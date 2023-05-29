import React from 'react'
import style from './Relogio.module.scss'

function Relogio() {
    return (
        <div className={style.relogio}>
            <span className={style.relogioNumero}>0</span>
            <span className={style.relogioNumero}>0</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>0</span>
            <span className={style.relogioNumero}>0</span>
        </div>
    )
}

export default Relogio