import React from 'react'
import st from './Title2.module.css'

function Title2({text, color, size, className}) {
  return (
    <h2 className={`${st.title} ${st[className]}`} style={{color: color, fontSize: size}}>{text}</h2>
  )
}

export default Title2