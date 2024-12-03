import React from 'react'
import st from './ImageOrg.module.css'

function ImageOrg({link, width, text, br, className}) {
  return (
      <img className={st[className]} style={{width: width, borderRadius: br}} src={link} alt={text} />
  )
}

export default ImageOrg