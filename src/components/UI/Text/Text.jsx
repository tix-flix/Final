import React from 'react'
import st from './Text.module.css'

function Text({size, color, text}) {
  return (
    <p className={st.text} style={{fontSize: size, color: color}}>{text}</p>
  )
}

export default Text