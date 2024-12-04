import React, { useEffect, useState } from 'react'
import Bgcont from '../../components/UI/BgCont/Bgcont'
import List from '../../components/List/List'


function Home() {
  const [info, setInfo] = useState([])

  useEffect(() => {
    fetch("../../../public/dataBase/services.json")
      .then((response) => response.json())
      .then((data) => {
        setInfo(data)
        console.log(data)
      })
  },[])
  return (
    <>
    <Bgcont className="homeCont" link="image/black.jpg">
      <List arr={info}/>
    </Bgcont>
    </>
  )
}

export default Home