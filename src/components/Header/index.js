import React from 'react';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Menu, LogIn } from 'react-feather';
import './index.scss'

import Logo from '../../assets/logo.svg'
import LogoIcon from '../../assets/logo-icon.svg'

const Header = () => {
  const app = useSelector(state => state.app)
  const dispatch = useDispatch()
  const { loggedIn } = app

  function openForm() {
    dispatch({ type: 'CHANGE_LOGINFORM_STATUS', payload: true })
  }

  function openMenu() {
    dispatch({ type: 'CHANGE_USERMENU_STATUS', payload: true })
  }

  return (
    <header className="header">
      <div className='header__logo'>
        <Link to="/">
          <img className="header__logo--desktop" src={Logo} alt="Logo" />
          <img className="header__logo--mobile" src={LogoIcon} alt="Logo" />
        </Link>
        <p>POWERED BY &nbsp;<a target="_blank noopener noreferrer" href="https://www.semprocesso.com.br">SEM PROCESSO</a></p>
      </div>

      <nav>
        {!loggedIn &&
        <div className='header__link' onClick={() => openForm(true)} >
          <p>Login</p>
          <LogIn size='25' />
        </div>}  
        {loggedIn && 
        <div className="header__link" onClick={() => openMenu(true)}>
          <p>Menu</p>
          <Menu size='25'/>
        </div>
        }
      </nav>
    </header>
  )
}

export default Header