import React, { useState, useEffect, FormEvent } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

import "./styles.css";
import Input from "../../components/Input/";

import warningIcon from "../../assets/images/icons/warning.svg";
import logoImg from "../../assets/images/logo.svg";
import backIcon from "../../assets/images/icons/back.svg";
import landingImg from '../../assets/images/landing.svg';


export default function TeacherForm() {

  // Define as variáveis do formulário
  const [totalUsers, setTotalUsers] = useState(0)
  const [name, setName] = useState('')
  const [user_name, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [news, setNews] = useState('')


  // Requisição GET para verificar a quantidade de usuários cadastrados
  useEffect(() => {
    api.get('users').then(response => {
      const { total } = response.data
      setTotalUsers(total)
    })
  }, [])

  function usersSignUp(e: FormEvent) {
    e.preventDefault()

    api.post('createuser', {
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
  }

  function verifyUser () {
    api.post('verifyusername')
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
                value={user_name}
                onChange={(e) => { setUserName(e.target.value) }}
                onBlur={verifyUser}
              />

              <Input
                name="email"
                label="E-mail"
                value={email}
                onChange={(e) => { setEmail(e.target.value) }}
              />

              <Input
                name="password"
                label="Senha"
                value={password}
                onChange={(e) => { setPassword(e.target.value) }}
              />

              <Input
                name="phone"
                label="Telefone"
                value={phone}
                onChange={(e) => { setPhone(e.target.value) }}
              />

              <Input
                name="3"
                label="Deseja receber nossas atualizações por E-mail?"
                type="checkbox"
                value={news}
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
