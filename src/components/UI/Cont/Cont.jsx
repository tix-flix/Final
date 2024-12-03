import React from 'react'
import st from './Cont.module.css'

function Cont({wid, hei,children, className}) {
    let styles = {
        width: wid,
        height: hei
    }
  return (
    <div className={`${st.cont} ${st[className]}`} style={styles}>{children}</div>
  )
}

export default Cont