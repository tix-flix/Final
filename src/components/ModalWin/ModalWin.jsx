import React from 'react'
import st from './ModalWin.module.css'
import Title1 from '../UI/Title1/Title1'
import Title3 from '../UI/Title3/Title3'
import InputEmail from '../UI/InputEmail/InputEmail'
import InputTel from '../UI/InputTel/InputTel'
import InputText from '../UI/InputText/InputText'
import Buttons from '../UI/Buttons/Buttons'
import Border from '../UI/Border/Border'

function ModalWin({ className }) {
  const check = (x) => {
    if (x != "") { 
      return st[x]
    } else {
      return ""
    }
  }

  return (
    <div className={`${st.modal} ${check(className)}`}>
        <Title1 text="Оставить заявку" size="var(--md)"/>
        <InputEmail className="inEm"/>
        <Title3 text="Или"/>
        <InputTel className="inTel"/>
        <Border className="bar" wid="60%" hei="2px" bgcolor="var(--main)"/>
        <InputText text="Услуга" className="inText"/>
        <Buttons bgcolor="var(--main)" color="white" text="Заказать"/>
        <Title1 text="Или свяжись с нами" size="var(--md)"/>
        <Title3 text="8-800-555-3535" size="var(--md)"/> 
    </div>
  );
}

export default ModalWin
