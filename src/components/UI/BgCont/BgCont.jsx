import React from 'react'
import st from './BgCont.module.css'

function Bgcont({children, link, color, className}) {
    let styles = {
        backgroundImage: `url(${link})`,
        backgroundColor: color
    }
  return (
    <div className={`${st.cont} ${st[className]}`} style={styles}>{children}</div>
  )
}

export default Bgcont