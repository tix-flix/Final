import React from 'react'
import st from './InputTel.module.css'

function InputTel({className}) {
  return (
    <input className={st[className]} type="tel" placeholder='Номер телефона'/>
  )
}

export default InputTel