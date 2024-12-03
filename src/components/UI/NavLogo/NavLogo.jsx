import React from 'react'
import st from "./NavLogo.module.css"

function NavLogo({link, width, text, add}) {
  return (
    <a href={add}>
      <img className={st.img} style={{width: width}} src={link} alt={text} />
    </a>
  )
}

export default NavLogo