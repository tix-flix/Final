import React from 'react'
import Bgcont from '../../components/UI/BgCont/Bgcont'
import ImageOrg from '../../components/UI/Image/ImageOrg'
import Title1 from '../../components/UI/Title1/Title1'

function Else() {
  return (
    <>
    <Bgcont>
      <ImageOrg className="imgElse" width="250px" link="/image/shieldLogo.png"/>
      <Title1 text="404 NOT FOUND"/>
    </Bgcont>
    </>
  )
}

export default Else