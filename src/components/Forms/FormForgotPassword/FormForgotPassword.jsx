import React, {useState} from 'react';
import styleForgotPass from './FormForgotPassword.module.css'
import {Button, EmailInput,} from "@ya.praktikum/react-developer-burger-ui-components";

const FormForgotPassword = () => {
  const [email, setEmail] = useState('');
  const onEmailChange = e => setEmail(e.target.value)

  return (
    <div className={styleForgotPass.container}>
      <form className={styleForgotPass.form}>
        <h2 className={'text text_type_main-medium'}>Восстановление пароля</h2>
        <EmailInput type="email" placeholder="Укажите e-mail" onChange={onEmailChange} value={email}/>
        <Button type="primary" value="Войти" htmlType={"submit"}>Восстановить</Button>
        <p className={`text text_type_main-default text_color_inactive ${styleForgotPass.text}`}>Вспомнили пароль? <a
          className={styleForgotPass.link}
          href="src/Pages/PageLogin/PageLogin#">Войти</a></p>
      </form>
    </div>
  );
};

export default FormForgotPassword;
