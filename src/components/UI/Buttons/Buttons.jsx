import React from 'react'
import st from './Buttons.module.css'

function Buttons(props) {
    let styles = {
        color: props.color,
        backgroundColor: props.bgcolor,
        fontSize: props.size
    }
  return (
    <button style={styles} className={`${st.btn} ${st[props.className]}`} onClick={props.onClick}>{props.text}</button>
  )
}

export default Buttons