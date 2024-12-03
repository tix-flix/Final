import React, { Children } from 'react'
import st from './ImageCont.module.css'

function ImageCont({link, wid, hei, br, Children}) {
    let styles = {
        backgroundImage: `url(${link})`,
        width: wid,
        height: hei,
        borderRadius: br
    }
  return (
    <div className={st.box} style={styles}>{Children}</div>
  )
}

export default ImageCont