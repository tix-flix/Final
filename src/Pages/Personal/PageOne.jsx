import React, { useEffect, useState } from 'react'
import Title1 from '../../components/UI/Title1/Title1';
import Title2 from '../../components/UI/Title2/Title2';
import { useParams } from 'react-router-dom';
import PreLoad from '../../components/UI/PreLoad/PreLoad';

function PageOne() {
    const {myId} = useParams()
    const [obj, setObj] = useState({})
    useEffect(() => {
        fetch("/public/dataBase/services.json")
        .then((response) => response.json())
        .then((data) => {
            const item = data.find((e) => e.id == myId);
            if (item) setObj(item);
      })
      .catch((error) => console.error("Ошибка при загрузке данных:", error));
    },[])

  return (
    <>
    {obj.price ? (
        <>
          <Title1 color="var(--textColor)" text={`Цена: ${obj.price.cheap.cost}`} />
          <Title2 color="var(--textColor)" text={obj.price.cheap.description} />
        </>
      ) : (
        <PreLoad/>
      )}
    </>
  )
}

export default PageOne