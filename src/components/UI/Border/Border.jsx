import React from 'react'
import st from './Border.module.css'

function Border({wid, hei, bgcolor, className}) {
    let styles = {
        width: wid,
        height: hei,
        backgroundColor: bgcolor
    }
  return (
    <div className={st[className]} style={styles}></div>
  )
}

export default Border