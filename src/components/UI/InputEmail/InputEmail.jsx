import React from 'react'
import st from './InputEmail.module.css'

function InputEmail({className}) {
  return (
    <input className={st[className]} type="email" placeholder='email' />
  )
}

export default InputEmail