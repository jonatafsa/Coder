import React, { useState, useEffect, FormEvent } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

import "./styles.css";
import Input from "../../components/Input/";

import warningIcon from "../../assets/images/icons/warning.svg";
import logoImg from "../../assets/images/logo.svg";
import backIcon from "../../assets/images/icons/back.svg";
import landingImg from '../../assets/images/landing.svg';

import PhoneInput from 'react-phone-input-2'

import 'react-phone-input-2/lib/semantic-ui.css'

export default function TeacherForm() {

  // Define as variáveis do formulário
  const [totalUsers, setTotalUsers] = useState(0)
  const [name, setName] = useState('')
  const [user_name, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [news, setNews] = useState('')
  const [verifyUserInput, setVerifyUserInput] = useState('input-block-verify')
  const [verifyEmailInput, setVerifyEmailInput] = useState('input-block-verify')
  const [messageEmail, setMessageEmail] = useState('')
  const [messageUser, setMessageUser] = useState('')
  const [iconVerifyEmail, setIconVerifyEmail] = useState('icon fa fa-square-o')


  // Requisição GET para verificar a quantidade de usuários cadastrados
  useEffect(() => {
    api.get('users').then(response => {
      const { total } = response.data
      setTotalUsers(total)
    })
  }, [])

  //Função que cadastra o usuário
  function usersSignUp(e: FormEvent) {
    e.preventDefault()

    const regexp = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    if (
      (email.search(regexp)) !== -1 &&
      (name.length) > 10 &&
      (user_name.length) > 8 &&
      (password.length > 6) &&
      (phone.length > 11) &&
      (verifyEmailInput == 'input-block-verify')
    ) {
      const valida = api.post('createuser', {
        name,
        user_name,
        email,
        password,
        phone,
        news
      }).then(() => {
        alert('Foi bom')
      }).catch(() => {
        alert('Foi mal')
      })

      return alert('Cadastrou')

    } else {

      return alert('Revise os erros a seguir')

    }

  }



  async function verifyUserFunction() {

    const response = await api.get('verifyusername', {
      params: { user_name }
    })

    if (response.data.length > 0) {
      setVerifyUserInput('input-block-verify-red')
      const message = user_name + (' Já está cadastrado')
      return (
        setMessageUser(message)
      )
    } else {
      setVerifyUserInput('input-block-verify')
      setMessageUser('')
    }
    return
  }

  async function verifyEmailFunction() {

    const response = await api.get('verifyemail', {
      params: { email }
    })

    if (response.data.length > 0) {
      setVerifyEmailInput('input-block-verify-red')
      const message = ('Este E-mail já está cadastrado')
      return (
        setMessageEmail(message),
        setIconVerifyEmail('icon-red fa fa-close')
      )
    } else {
      return (
        setVerifyEmailInput('input-block-verify'),
        setMessageEmail(''),
        verifyEmailValues()
      )
    }
    return
  }

  function verifyEmailValues() {

    setVerifyEmailInput('input-block-verify')

    const regexp = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    if ((email.search(regexp) !== -1)) {
      return (
        setIconVerifyEmail('icon-green fa fa-check'),
        setMessageEmail('')
      )
    }
    else {
      return (
        setIconVerifyEmail('icon-red fa fa-close'),
        setMessageEmail('Este email é inválido')
      )
    }
  }

  return (
    <div className="container" id="page-teacher-form">

      <div className="box left">

        <Link to="/">
          <img src={backIcon} alt="Voltar" />
        </Link>

        <main>

          <form onSubmit={usersSignUp} >
            <fieldset>
              <legend>Seus Dados</legend>


              <Input
                name="name"
                label="Nome Completo"
                value={name}
                onChange={(e) => { setName(e.target.value) }}
              />

              <Input
                name="userName"
                label="Nome de Usuário"
                id={verifyUserInput}
                value={user_name}
                onChange={(e) => { setUserName(e.target.value) }}
                onBlur={verifyUserFunction}
              />
              <span>{messageUser}</span>

              <Input
                name="email"
                label="E-mail"
                id={verifyEmailInput}
                value={email}
                onChange={(e) => { setEmail(e.target.value) }}
                onBlur={verifyEmailFunction}
                onKeyPress={verifyEmailValues}
              />

              <i className={iconVerifyEmail}></i>
              <span>{messageEmail}</span>

              <Input
                name="password"
                label="Senha"
                value={password}
                onChange={(e) => { setPassword(e.target.value) }}
              />

              <div id="span-phone">
                <span className="fast">Telefone</span>
              </div>

              <PhoneInput
                inputClass="phone-class"
                country={'br'}
                countryCodeEditable={false}
                enableSearch={false}
                masks={{ br: '(..) . ....-....' }}
                placeholder="Enter phone number"
                value={phone}
                onChange={(e) => {
                  setPhone(e)
                }}
              />

              <Input
                name="news"
                label="Deseja receber nossas atualizações por E-mail?"
                type="checkbox"
                value='1'
                onChange={(e) => { setNews(e.target.value) }}
              />

            </fieldset>
            <footer>
              <p>
                Importante <br />
            Preencha todos os dados
          </p>
              <button type="submit">Salvar cadastro</button>
            </footer>
          </form>
        </main>
      </div>

      <div className="box right">

        <div className="wrapper">

          <div className="right-box header">
            <img src={logoImg} alt="" />
          </div>

          <div className="right-box sidebar">
            <p>
              Use o formulário para se cadastrar na plataforma
            <br />
              <br />
            “Lembre-se que as pessoas podem tirar tudo de você, menos o seu conhecimento.”
          </p>
          </div>
          <div className="right-box content">
            <img src={landingImg} alt="" />
          </div>
          <div className="right-box footer">mais de {totalUsers} usuários cadastrados</div>
        </div>
      </div>
    </div>
  );

}

