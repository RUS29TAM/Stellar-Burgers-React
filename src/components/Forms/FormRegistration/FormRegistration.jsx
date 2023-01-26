import React, {useState} from 'react';
import styleReg from "./FormRegistration.module.css";
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link} from "react-router-dom";

const FormRegistration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const onEmailChange = e => setEmail(e.target.value)
  const onPasswordChange = e => setPassword(e.target.value)
  const onNameChange = e => setName(e.target.value)

  return (
    <div className={styleReg.container}>
      <form className={styleReg.form}>
        <h2 className={'text text_type_main-medium'}>Регистрация</h2>
        <Input type="text" placeholder="Имя" onChange={onNameChange} value={name} />
        <EmailInput type="email" placeholder="E-mail" onChange={onEmailChange} value={email} />
        <PasswordInput type="password" placeholder="Пароль" onChange={onPasswordChange}
                       value={password}/>
        <Button type="primary" value="Войти" htmlType={"submit"} >Зарегистрироваться</Button>
        <p className={`text text_type_main-default text_color_inactive ${styleReg.text}`}>Уже зарегистрированы? <Link className={styleReg.link}
          to="/login">Войти</Link></p>
      </form>
    </div>
  );
};

export default FormRegistration;
