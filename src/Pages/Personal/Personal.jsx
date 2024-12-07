import React, { useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import Title1 from '../../components/UI/Title1/Title1'
import Bgcont from '../../components/UI/BgCont/Bgcont'
import ImageCont from '../../components/UI/ImageCont/ImageCont'
import Title3 from '../../components/UI/Title3/Title3'
import NavLinkCustom from '../../components/UI/NavLink/NavLinkCustom'
import st from './Personal.module.css'
import LinkRoute from '../../components/UI/LinkRoute/LinkRoute'

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
    <Bgcont className="persCont" link="/image/dark2.jpg">
      <ImageCont link={obj.image} wid="450px" hei="350px" br="10px"/>
      <Title1 color="var(--textColor)" text={obj.name}/>
      <div className={st.box}>
      <Title3 color="var(--textColor)" text={obj.description}/>
      </div>
    <div className="cont__box">
      <div className={st.cont}>
        <NavLinkCustom className={({isActive}) => (isActive ? st.active : st.passive )} add={`/home/${myId}/PageOne`} text="Низкая цена"/>
        <NavLinkCustom className={({isActive}) => (isActive ? st.active : st.passive )} add={`/home/${myId}/PageTwo`} text="Средняя цена"/>
        <NavLinkCustom className={({isActive}) => (isActive ? st.active : st.passive )} add={`/home/${myId}/PageThree`} text="Большая цена"/>
      </div>
      <div className={st.box2}>
      <div className={st.cont2}>
        <Outlet/>
      </div>
      </div>
    </div>
      <LinkRoute text="<<< Назад >>>" add="/home"/>
    </Bgcont>
    </>
  )
}

export default Personal