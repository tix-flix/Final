import React, { useEffect, useState } from 'react'
import Title1 from '../../components/UI/Title1/Title1';
import Title2 from '../../components/UI/Title2/Title2';

function PageOne() {
    const [obj, setObj] = useState([])
    useEffect(() => {
        fetch("../../../public/dataBase/services.json")
        .then((response) => response.json())
        .then((data) => {
            const item = data.find((e) => e.id == myId);
        setObj(item);
        console.log(item)
        })
    },[])
  return (
    <>
    <Title1 text={obj.price.cheap.cost}/>
    <Title2 text={obj.price.cheap.description}/>
    </>
  )
}

export default PageOne