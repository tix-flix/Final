import React from 'react'
import { Link } from 'react-router-dom'
import st from './LinkRoute.module.css'

function LinkRoute({add, text}) {
  return (
    <Link to={add} className={st.link}>{text}</Link>
  )
}

export default LinkRoute