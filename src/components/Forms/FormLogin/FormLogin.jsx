import React, {useState} from 'react';
import styleLogin from "./FormLogin.module.css";
import {Button, EmailInput, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import useUserController from "../../../hooks/useUserController";
import {setUserAction} from "../../../services/actions/user";

const FormLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const onEmailChange = e => setEmail(e.target.value)
  const onPasswordChange = e => setPassword(e.target.value)
  const dispatch = useDispatch()
  const userConfig = useUserController()
  const navigate = useNavigate()

  const onSubmit = (e) => {
    e.preventDefault()
    if (email && password) {
      userConfig.login(email, password)
        .then(user => {
          dispatch(setUserAction(user))
          navigate(-1)
        })

    }
  }

  return (//решил немного поэксперементировать и одну из страниц сделать со своей стилистикой и анимацией, которую увидел на одном их ютуб каналов.
    <section className={styleLogin.section}>
      <div className={styleLogin.color}></div>
      <div className={styleLogin.color}></div>
      <div className={styleLogin.color}></div>
      <div className={styleLogin.color}></div>
      <div className={styleLogin.color}></div>
      <div className={styleLogin.box}>
        <div className={styleLogin.square}></div>
        <div className={styleLogin.square}></div>
        <div className={styleLogin.square}></div>
        <div className={styleLogin.square}></div>
        <div className={styleLogin.square}></div>
        <div className={styleLogin.square}></div>
        <div className={styleLogin.square}></div>
        <div className={styleLogin.container}>
          <div className={styleLogin.form}>
            <h2>Вход</h2>
            <form onSubmit={onSubmit}>
              <div className={styleLogin.inputBox}>
                <EmailInput type="email" placeholder="E-mail" onChange={onEmailChange} value={email}/>
              </div>
              <div className={styleLogin.inputBox}>
                <PasswordInput type="password" placeholder="Введите пароль" onChange={onPasswordChange}
                               value={password}/>
              </div>
              <div className={styleLogin.inputBox}>
                <Button type="primary" value="Войти" htmlType={"submit"}>Войти</Button>
              </div>
              <p className={styleLogin.forget}>Вы — новый пользователь?
                <Link to="/registration">Зарегистрироваться</Link>
              </p>
              <p className={styleLogin.forget}>Забыли пароль?
                <Link to="/forgot-password">Восстановить пароль</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormLogin;
