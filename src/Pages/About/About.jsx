import React, { useEffect, useState } from 'react'
import Title1 from '../../components/UI/Title1/Title1'


function About() {
  const [vill, setVill] = useState([])
  useEffect( () => {
    fetch("/villages.json")
    .then(response => response.json())
    .then(data => {
      setVill(data.villages)
    })
  },[]) 
  return (
    <>
    <Title1 text="Деревни мира ниндзя" color="rgb(251,228,7)"/>
    <List2/>
    </>
  )
}

export default About