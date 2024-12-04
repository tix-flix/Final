import React from 'react'
import Bgcont from '../../components/UI/BgCont/Bgcont'
import Title1 from '../../components/UI/Title1/Title1'
import Title3 from '../../components/UI/Title3/Title3'
import Text from '../../components/UI/Text/Text'
import Title2 from '../../components/UI/Title2/Title2'
import Border from '../../components/UI/Border/Border'
import ImageOrg from '../../components/UI/Image/ImageOrg'
import st from './About.module.css'

function About() {
  return (
    <>
    <Bgcont className="about" link="/public/image/dark.jpg">
      <Title1 color="var(--textColor)" text="Доверяйте профессионалам"/>
      <Title2 color="var(--textColor)" text="Фото с нами"/>
      <div className={st.slide}>
        <ImageOrg className="slide" width="300px" link="/image/img.sert/ohrannaya-signalizaciya-1-scaled.jpg"/>
        <ImageOrg className="slide" width="300px" link="/image/img.sert/ohrannaya-signalizaciya-2-scaled.jpg"/>
        <ImageOrg className="slide" width="300px" link="/image/img.sert/ohrannaya-signalizaciya-3-scaled.jpg"/>
        <ImageOrg className="slide" width="300px" link="/image/img.sert/ohrannaya-signalizaciya-4-scaled.jpg"/>
        <ImageOrg className="slide" width="300px" link="/image/img.sert/ohrannaya-signalizaciya-5-scaled.jpg"/>
        <ImageOrg className="slide" width="300px" link="/image/img.sert/ohrannaya-signalizaciya-6-scaled.jpg"/>
        <ImageOrg className="slide" width="300px" link="/image/img.sert/ohrannaya-signalizaciya-7-scaled.jpg"/>
        <ImageOrg className="slide" width="300px" link="/image/img.sert/ohrannaya-signalizaciya-8-scaled.jpg"/>
        <ImageOrg className="slide" width="300px" link="/image/img.sert/ohrannaya-signalizaciya-9-scaled.jpg"/>
        <ImageOrg className="slide" width="300px" link="/image/img.sert/ohrannaya-signalizaciya-10-scaled.jpg"/>
        <ImageOrg className="slide" width="300px" link="/image/img.sert/ohrannaya-signalizaciya-11-scaled.jpg"/>
        <ImageOrg className="slide" width="300px" link="/image/img.sert/ohrannaya-signalizaciya-12-scaled.jpg"/>
      </div>
      <Title3 color="var(--textColor)" text="О НАС"/>
      <Border className="bdr" wid="60%" hei="1%" bgcolor="var(--textColor)"/>
      <Text color="var(--textColor)" text="Мы – группа компаний, в состав которой входят несколько охранных агентств: ОсОО «Вымпел – Щит», ОсОО ОДА «Азия Секьюрити», ОсОО «Альянс Безопасности» , ОсОО «Охранное агентство Про-секьюрити», ОсОО «Профи Электроникс» и юридическая компания «АлНур Сервис». На рынке с 2008 года и оказываем все виды охранных и детективных услуг в соответствии с законами КР «О частной детективной и охранной деятельности», «Об оружии» и иными нормативными актами."/>
    </Bgcont>
    </>
  )
}

export default About