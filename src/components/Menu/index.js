import React from 'react';
// import axios from 'axios';
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { X, Home, User, Activity, TrendingUp } from 'react-feather';

import Button from '../Button'
import './index.scss'

const Menu = () => {
  const app = useSelector(state => state.app)
  const dispatch = useDispatch()
  const { loggedIn, menuOpen } = app
  const currentPage = window.location.pathname
  const history = useHistory()

  function handleLogout() {
    document.getElementsByClassName("menu menu--visible")[0].style.width = "100vw";
    closeMenu()
    setTimeout(() => { localStorage.removeItem("user"); }, 900);
    setTimeout(() => { localStorage.removeItem("fileName"); }, 900);
    setTimeout(() => { localStorage.removeItem("fileDate"); }, 900);
    setTimeout(() => { localStorage.removeItem("fileUrl"); }, 900);
    setTimeout(() => { dispatch({ type: 'CHANGE_LOGIN_STATUS', payload: false }); }, 900);
    setTimeout(() => { history.push("/") }, 900);
    setTimeout(() => {  document.getElementsByClassName("menu")[0].style.width = null; }, 1000);
    
    // axios.delete('users/logout').then(response =>{
    //   console.log(response)
    //   document.getElementsByClassName("menu menu--visible")[0].style.width = "100vw";
    //   closeMenu()
    //   setTimeout(() => { localStorage.removeItem("user"); }, 900);
    //   setTimeout(() => { localStorage.removeItem("fileName"); }, 900);
    //   setTimeout(() => { localStorage.removeItem("fileDate"); }, 900);
    //   setTimeout(() => { localStorage.removeItem("fileUrl"); }, 900);
    //   setTimeout(() => { dispatch({ type: 'CHANGE_LOGIN_STATUS', payload: false }); }, 900);
    //   setTimeout(() => { history.push("/") }, 900);
    //   setTimeout(() => {  document.getElementsByClassName("menu")[0].style.width = null; }, 1000);
    // }).catch(e => {
    //   console.log(e);
    // })
  }

  function closeMenu() {
    dispatch({ type: 'CHANGE_USERMENU_STATUS', payload: false })
  }

  function redirectToHome(){
    history.push("/");
    closeMenu();
  }
  
  function redirectToSummary(){
    history.push("/resumos");
    closeMenu();
  }

  function redirectToPredition(){
    history.push("/predicoes");
    closeMenu();
  }

  return (
    <div className={menuOpen ? "menu menu--visible" : "menu"}>
      <div className={menuOpen ? "menu__container menu__container--visible" : "menu__container"}>
        <X className="menu__back" onClick={() => closeMenu(false)} size='30' />
        <div className={currentPage === "/" ? "menu__list__page menu__list__page--selected" : "menu__list__page"} onClick={() => redirectToHome()}>
          <Home size='24'/>
          Home
        </div> 
        <div className={currentPage === "/resumos" ? "menu__list__page menu__list__page--selected" : "menu__list__page" } onClick={() => redirectToSummary()}>
          <Activity size='24'/>
          Análise de Base
        </div>
        <div className={currentPage === "/predicoes" ? "menu__list__page menu__list__page--selected" : "menu__list__page" } onClick={() => redirectToPredition()}>
          <TrendingUp size='24'/>
          Predição de Resultados
        </div>

        <div className='menu__list__bottom'>
          <div className='menu__list__user'>
            <User size='24'/>
            <h2>Gabriel Polvoerelli</h2>
            <h3>Sem Processo</h3>
          </div>
          <Button scrollLink={true} onClick={() => handleLogout()} type="1" style={{width: '80px', height: '46px', minHeight: '46px', fontSize: '14px', top: '50px'}}>
            Sair
          </Button>
        </div>
      </div>
    </div>  
  )
}

export default Menu
