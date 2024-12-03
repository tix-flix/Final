import React from 'react'
import st from './ModalWin.module.css'
import Title1 from '../UI/Title1/Title1'
import Title3 from '../UI/Title3/Title3'

function ModalWin({className}) {
  return (
    <div className={st[className]}>
        {/* <Title1 text="свяжись с нами"/>
        <Title3 text="8-800-555-3535"/>  */}
    </div>
  )
}

export default ModalWin