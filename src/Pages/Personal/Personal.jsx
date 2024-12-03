import React, { useEffect, useState } from 'react'
import st from './Personal.module.css'
import ImageCont from '../../UI/ImageCont/ImageCont'
import Title1 from '../../UI/Title1/Title1'
import Title2 from '../../UI/Title2/Title2'
import Title3 from '../../UI/Title3/Title3'
import { useParams } from 'react-router-dom'
import LinkRoute from '../../UI/LinkRoute/LinkRoute'

function Personal() {
    const {myId} = useParams()
    const [obj, setObj] = useState([])
    useEffect(() => {
        fetch("/villages.json")
        .then((response) => response.json())
        .then((data) => {
            const item = data.villages.find((e) => e.id == myId);
        setObj(item);
        })
    },[])

  return (
    <div className={st.cont}>
    <center className={st.cont__1}>
        <Title3 text={`Номер: ${obj.id}`} color="rgb(251,228,7)"/>
        <ImageCont link={obj.image} wid="700px" hei="450px" br="15px"/>
        <Title1 text={`Название: ${obj.name}`} color="rgb(251,228,7)"/>
        <Title2 text={`Описание: ${obj.description}`} color="rgb(251,228,7)"/>        
        <Title2 text={`Популяция: ${obj.population}`} color="rgb(251,228,7)"/>
        <LinkRoute add="/about" text="<<< Назад >>>"/>        
    </center>
    </div>
  )
}

export default Personal