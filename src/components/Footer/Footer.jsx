import React from 'react'
import Title3 from '../UI/Title3/Title3'
import st from './Footer.module.css'
import ImageLink from '../UI/ImageLink/ImageLink'

function Footer() {
  return (
    <div className={st.cont}>
    <div className={st.cont__box2}>
        <ImageLink br="50%" width="30px" link="https://cdn-icons-png.freepik.com/256/15707/15707869.png?semt=ais_hybrid"/>
        <ImageLink br="50%" width="30px" link="https://upload.wikimedia.org/wikipedia/commons/5/5c/Telegram_Messenger.png"/>
        <ImageLink br="50%" width="30px" link="https://cdn-icons-png.freepik.com/256/2496/2496112.png?semt=ais_hybrid"/>
    </div>
    <div className={st.cont__box}>
        <Title3 className={st.title3} color="black" text="«Арес» – ваш щит безопасности, всегда на страже."/>
        <Title3 className={st.title3} color="black" text="© ООсО Ares Все права защищены.2024"/>
        <Title3 className={st.title3} color="black" text="Связаться с нами:"/>
    </div>
    </div>
  )
}

export default Footer