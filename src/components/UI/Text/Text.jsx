import React from 'react'
import st from './Text.module.css'

function Text({size, color, text}) {
  return (
    <div className={st.cont}>
      <p className={st.text} style={{fontSize: size, color: color}}>{text}</p>
    </div>
  )
}

export default Text