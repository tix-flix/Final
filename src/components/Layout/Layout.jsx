import React from 'react'
import st from './Layout.module.css'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'

function Layout({children}) {
  return (
    <div className={st.wrapper}>
      <div className={st.container}>
        <Nav/>
        {children}
        <Footer/>
        </div>
    </div>
  )
}

export default Layout