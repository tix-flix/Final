import React from 'react'
import st from './CustomInput.module.css'

function CustomInput({className, type, pholder}) {
  return (
    <input className={st[className]} type={type} placeholder={pholder} />
  )
}

export default CustomInput