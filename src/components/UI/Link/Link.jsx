import React from 'react'
import st from './Link.module.css'

function Link({color, size, link, text}) {
  return (
    <a style={{ color: color, fontSize: size }} className={st.link} href={link}>{text}</a>
  )
}

export default Link