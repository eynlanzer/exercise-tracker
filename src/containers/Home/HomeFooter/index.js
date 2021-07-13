import React, { useState } from "react"
// import { useDispatch, useSelector } from 'react-redux'
import './index.scss'
import _ from 'lodash'
import { email as emailFormat, phone as phoneFormat } from '../../../constants/validate'
import Logo from '../../../assets/logo.svg'
import Button from '../../../components/Button'

const HomeFooter = () => {
  const [name, setName] = useState('')
  const [nameError, setNameError] = useState(false)
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState(false)
  const [phone, setPhone] = useState('')
  const [phoneError, setPhoneError] = useState(false)
  // const dispatch = useDispatch()
  // const app = useSelector(state => state.app)
  // const { loading } = app

  function handleEmail() {
    if (emailFormat(email) === 'Email Inválido' && email !== '') {
      setEmailError(true)
      setEmail('')
    }
    else {
      setEmailError(false)
    }
  }

  function handlePhone() {
    if (phone.length < 13 && phone.length > 0) {
      setPhoneError(true)
      setPhone('')
    }
    else {
      setPhoneError(false)
    }
  }

  function handleName(value) {
    setNameError(false)
    setName(value)
  }

  function sendForm() {
    let html = ''
    let error = false

    if (!_.isEmpty(name)) {
      setNameError(false)
      html = html + `<br>Nome: ${name}</br>`
    }
    else {
      setNameError(true)
      error = true
    }

    if (!_.isEmpty(email)) {
      setEmailError(false)
      html = html + `<br>Email: ${email}</br>`
    }
    else {
      setEmailError(true)
      error = true
    }

    if (!_.isEmpty(phone)) {
      setPhoneError(false)
      html = html + `<br>Telefone: ${phone}</br>`
    }
    else {
      setPhoneError(true)
      error = true
    }

    if (!error) {
      setName('')
      setPhone('')
      setEmail('')
    }
  }

  return (
    <div className="footer">
      <div className="footer__top">
        <h1>Nós vamos até você.</h1>
        <div className="footer__form">
          <input className={(nameError) ? 'footer__form__input footer__form__input--error' : 'footer__form__input'} placeholder='Nome Completo' onChange={(e) => handleName(e.target.value)} value={name} />
          <input className={(emailError) ? 'footer__form__input footer__form__input--error' : 'footer__form__input'} placeholder={emailError ? 'E-mail inválido' : 'E-mail'} onChange={(e) => setEmail(e.target.value)} value={email} onBlur={() => handleEmail()} />
          <input className={(phoneError) ? 'footer__form__input footer__form__input--error' : 'footer__form__input'} placeholder={phoneError ? 'Telefone inválido' : 'Telefone'} onChange={(e) => setPhone(phoneFormat(e.target.value))} value={phone} onBlur={() => handlePhone()} />
          <span>
            <Button type='2' height='50px' onClick={() => sendForm()}>Enviar</Button>
          </span>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__container">
          <div className="footer__bottom__left">
            <p>Sem Processo, Inc. Todos os direitos reservados.</p>
          </div>
          <div className="footer__bottom__right">
            <img src={Logo} alt="Logo Lawop" className="footer__bottom__logo" />
            <div className="footer__bottom__line"></div>
            <div className="footer__bottom__social">
              <span>Compartilhe nas redes sociais:</span>
              <div className="footer__bottom__social__links">
                <a href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fwww.lawop.com.br/v1" target="_blank" rel="noopener noreferrer">Linkedin</a>
                <div className="footer__bottom__social__links__line"></div>
                <a href="https://twitter.com/share?url=https://www.lawop.com.br" target="_blank" rel="noopener noreferrer">Twitter</a>
                <div className="footer__bottom__social__links__line"></div>
                <a href="https://www.facebook.com/sharer/sharer.php?u=https://www.lawop.com.br" target="_blank" rel="noopener noreferrer">Facebook</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default HomeFooter
