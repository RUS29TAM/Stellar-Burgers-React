import React, {useState} from 'react';
import styleLogin from './PageLogin.module.css';
import {EmailInput, PasswordInput, Button} from "@ya.praktikum/react-developer-burger-ui-components"

const PageLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const onEmailChange = e => setEmail(e.target.value)
  const onPasswordChange = e => setPassword(e.target.value)

  return (
    <section>
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
        <div className={styleLogin.container}>
          <div className={styleLogin.form}>
            <h2>Вход</h2>
            <form>
              <div className={styleLogin.inputBox}>
                <EmailInput type="email" placeholder="E-mail" onChange={onEmailChange} value={email}/>
              </div>
              <div className={styleLogin.inputBox}>
                <PasswordInput type="password" placeholder="Введите пароль" onChange={onPasswordChange}
                               value={password}/>
              </div>
              <div className={styleLogin.inputBox}>
                <Button type="submit" value="Войти" htmlType={"submit"}>Войти</Button>
              </div>
              <p className={styleLogin.forget}>Вы — новый пользователь? <a href="#">Зарегистрироваться</a></p>
              <p className={styleLogin.forget}>Забыли пароль? <a href="#">Восстановить пароль</a></p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageLogin;
