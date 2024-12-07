import React from 'react'
import st from './Nav.module.css'
import NavLogo from '../UI/NavLogo/NavLogo'
import NavLinkCustom from '../UI/NavLink/NavLinkCustom'

function Nav() {
  return (
      <div className={st.cont}>
        <div className={st.nav__logo}>
          <NavLogo add="/" link="/image/shieldLogo.png" width="50px"/>
        </div>
        <ul className={st.list}>
          <li className={st.list__link}>
            <NavLinkCustom className={({isActive}) => (isActive ? st.active : st.passive )} add='/' text="Главная" />
          </li>
          <li className={st.list__link}>
            <NavLinkCustom className={({isActive}) => (isActive ? st.active : st.passive )} add='/home' text="Услуги"/>
          </li>
          <li className={st.list__link}>
            <NavLinkCustom className={({isActive}) => (isActive ? st.active : st.passive )} add='/about' text="О Нас"/>
          </li>
        </ul>
      </div>
  )
}

export default Nav