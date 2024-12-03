import React from 'react'
import { NavLink } from 'react-router-dom'

function NavLinkCustom({add, text, className, onClick}) {
  return (
    <NavLink to={add} className={className} onClick={onClick}>{text}</NavLink>
  )
}

export default NavLinkCustom