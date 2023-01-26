import React, {useState} from 'react';
import styleForgotPass from './FormForgotPassword.module.css'
import {Button, EmailInput,} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";

const FormForgotPassword = () => {
  const [email, setEmail] = useState('');
  const onEmailChange = e => setEmail(e.target.value)

  return (
    <div className={styleForgotPass.container}>
      <form className={styleForgotPass.form}>
        <h2 className={'text text_type_main-medium'}>Восстановление пароля</h2>
        <EmailInput type="email" placeholder="Укажите e-mail" onChange={onEmailChange} value={email}/>
        <Button type="primary" value="Войти" htmlType={"submit"}>Восстановить</Button>
        <p className={`text text_type_main-default text_color_inactive ${styleForgotPass.text}`}>Вспомнили пароль? <Link
          className={styleForgotPass.link}
          to="/login">Войти</Link></p>
      </form>
    </div>
  );
};

export default FormForgotPassword;
