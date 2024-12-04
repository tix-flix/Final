import React from 'react'
import st from './Title1.module.css'

function Title1({text, color, size, className}) {
  return (
    <h1 className={`${st.title} ${st[className]}`} style={{color: color, fontSize: size}}>{text}</h1>
  )
}

export default Title1