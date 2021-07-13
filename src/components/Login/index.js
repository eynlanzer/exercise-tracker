import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import './index.scss'
import { X } from 'react-feather';
import Button from '../Button'
import { getGreeting as greeting } from '../../constants/others/index'
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const app = useSelector(state => state.app)
  const { isOpen, error, loading } = app
  const history = useHistory()

  function handleEmail(value) {
    setEmail(value)
  }

  function handlePassword(value) {
    setPassword(value)
  }
  
  function setLoading(bool) {
    dispatch({ type: 'CHANGE_LOADING_STATUS', payload: bool })
  }

  const handleLogin = useCallback((e) => {
    e.preventDefault();
    setLoading(true)
    axios.post('users/login', { email, password}).then(
      response => {
        if (response.data.token) {
          setLoading(false)
          console.log(response.data)
          localStorage.setItem('user', JSON.stringify(response.data)); 
          dispatch({ type: 'CHANGE_USER_STATUS', payload: response.data })
          dispatch({ type: 'CHANGE_LOGIN_STATUS', payload: true })
          dispatch({ type: 'CHANGE_ERROR_STATUS', payload: '' })
          redirectPage()
        }
      }).catch(error => {
      setLoading(false)
      console.log(error)
      dispatch({ type: 'CHANGE_ERROR_STATUS', payload: 'Usuário e/ou senha inválidos' })
    })
  });

  function closeForm() {
    dispatch({ type: 'CHANGE_LOGINFORM_STATUS', payload: false })
  }

  const redirectPage = async () => {
    document.getElementsByClassName("login login--visible")[0].style.width = "100vw";
    closeForm();
    setTimeout(() => { history.push("/business-analytics") }, 900);
    setTimeout(() => {  document.getElementsByClassName("login")[0].style.width = null; }, 1000);
  }

  useEffect(() => {
    const input = i => {
      if (i.code === "Enter" || i.code === "NumpadEnter") {
        document.getElementById('submit').click()
      }
    };
    document.addEventListener("keydown", input);
    return () => {
      document.removeEventListener("keydown", input);
    };
  }, [handleLogin]);

  return (
    <div className={isOpen ? "login login--visible" : "login"}>
      <div className={isOpen ? "login__container login__container--visible" : "login__container"}>
        <X className="login__back" onClick={() => closeForm(false)} size='30' />
        <h1>Login</h1>
        <h3>{greeting()}! Ficamos felizes em tê-lo conosco.</h3>
        
        <form className="login__form">
          <input className="login__form__input" type="text" placeHolder="E-mail" onChange={(e) => handleEmail(e.target.value)} value={email}  />
          <input className="login__form__input" type="password" placeHolder="Senha" onChange={(e) => handlePassword(e.target.value)} value={password} />
        
          <div className="login__form__actions">
            <Button id="submit" onClick={handleLogin} loading={loading} type={1} style={{width: '30%', height: '50px', minHeight: '50px', fontSize: '14px'}}>
              Entrar
            </Button>
          </div>
          <div className={error ? "login__form__error login__form__error--visible" : "login__form__error"}>
            <h3>{error}</h3>
          </div>
        </form>
      </div>
    </div>          
  )
}

export default Login