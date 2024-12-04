import React, { useState } from 'react'
import st from './Main.module.css'
import Title1 from '../../components/UI/Title1/Title1'
import Bgcont from '../../components/UI/BgCont/Bgcont'
import ImageOrg from '../../components/UI/Image/ImageOrg'
import Buttons from '../../components/UI/Buttons/Buttons'
import ModalWin from '../../components/ModalWin/ModalWin'
import Map from '../../components/UI/Map/Map'

function Main() {
  const [active, setActive] = useState();

  function btn() {
    setActive(!active)
  }
  return (
    <>
    <Bgcont className="frsCont" link="image/dark.jpg">
      <ImageOrg className="ImageO" width="350px" link="/image/shieldLogo.png"/>
      <Title1 className="mainTi" text='Частное охранное агентсво "Арес"' color="var(--altcolor)"/>
      <Buttons onClick={() => btn()} className="btnMob" size="var(--md)" br="20px" text="Заказать Услугу" bgcolor="var(--textColor)"/>
      <ModalWin className={active ? "mdlActive" : ""}/>
    </Bgcont>
    <Bgcont className="scnCont" color="var(--titleW)">
      <Title1 className="mainTi" text="Сертификаты"/>
      <div className={st.cont}>
      <ImageOrg className="scnCont__img" width="350px" link="image/img.sert/1.webp"/>
      <ImageOrg className="scnCont__img" width="350px" link="image/img.sert/2.jpg"/>
      <ImageOrg className="scnCont__img" width="350px" link="image/img.sert/3.jpg"/>
      <ImageOrg className="scnCont__img" width="350px" link="image/img.sert/4.jpg"/>
      <ImageOrg className="scnCont__img" width="350px" link="image/img.sert/5.webp"/>
      <ImageOrg className="scnCont__img" width="350px" link="image/img.sert/6.jpg"/>
      </div>
    </Bgcont>
    <Bgcont className="trhCont" link="image/dark.jpg">
    <Title1 className="mainTi" text="Где мы находимся:" color="var(--altcolor)"/>
      <Map wid="1000px" hei="450px"/>
    </Bgcont>
    </>
  )
}

export default Main