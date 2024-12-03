import React from 'react'
import Title1 from '../UI/Title1/Title1'
import LinkRoute from '../UI/LinkRoute/LinkRoute'
import st from './List2.module.css'

function List2({mass}) {
  return (
    <>
    <ul className={st.list}>
        {
          mass.map((e) => (
            <li className={st.list__item} key={e.id}>
                <Title1 text={e.name} color="rgb(251,228,7)"/>
                <LinkRoute text="<<< Узнать подробнее >>>" add={`/about/${e.id}`}/>
            </li>
            ))  
        }
    </ul>
    </>
  )
}

export default List2