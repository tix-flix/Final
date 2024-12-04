import React from 'react'
import st from './InputText.module.css'

function InputText({text, className}) {
  return (
    <input className={st[className]} placeholder={text} type="text"/>
  )
}

export default InputText