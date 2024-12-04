import React, { useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import Title1 from '../../components/UI/Title1/Title1'
import Bgcont from '../../components/UI/BgCont/Bgcont'
import ImageCont from '../../components/UI/ImageCont/ImageCont'
import Title3 from '../../components/UI/Title3/Title3'
import NavLinkCustom from '../../components/UI/NavLink/NavLinkCustom'
import st from './Personal.module.css'
import ImageOrg from '../../components/UI/Image/ImageOrg'

function Personal() {
  const {myId} = useParams()
    const [obj, setObj] = useState([])
    useEffect(() => {
        fetch("/dataBase/services.json")
        .then((response) => response.json())
        .then((data) => {
            const item = data.find((e) => e.id == myId);
        setObj(item);
        })
    },[])
  return (
    <>
    <Bgcont className="frsCont" link="image/black.jpg">
      <ImageOrg link={obj.image}/>
      <ImageCont link={obj.image} wid="450px" hei="350px" br="15px"/>
      <Title1 text={obj.name}/>
      <Title3 text={obj.description}/>
    </Bgcont>
      <div className={st.cont}>
        <NavLinkCustom className={({isActive}) => (isActive ? st.active : st.passive )} add='/Personal/PageOne' text="Низкая цена"/>
        <NavLinkCustom className={({isActive}) => (isActive ? st.active : st.passive )} add='/Personal/PageTwo' text="Средняя цена"/>
        <NavLinkCustom className={({isActive}) => (isActive ? st.active : st.passive )} add='/Personal/PageThree' text="Большая цена"/>
      </div>
      <div className={st.cont2}>
        <Outlet/>
      </div>
    </>
  )
}

export default Personal