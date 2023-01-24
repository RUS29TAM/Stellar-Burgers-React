import React, {useState} from 'react';
import styleReg from "./FormRegistration.module.css";
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";

const FormRegistration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const onEmailChange = e => setEmail(e.target.value)
  const onPasswordChange = e => setPassword(e.target.value)
  const onNameChange = e => setName(e.target.value)

  return (
    <div className={styleReg.form}>
      <h2>Регистрация</h2>
      <form>
        <div className={styleReg.inputBox}>
          <Input type="text" placeholder="Имя" onChange={onNameChange} value={name}/>
        </div>
        <div className={styleReg.inputBox}>
          <EmailInput type="email" placeholder="E-mail" onChange={onEmailChange} value={email}/>
        </div>
        <div className={styleReg.inputBox}>
          <PasswordInput type="password" placeholder="Введите пароль" onChange={onPasswordChange}
                         value={password}/>
        </div>
        <div className={styleReg.inputBox}>
          <Button type="primary" value="Войти" htmlType={"submit"}>Зарегистрироваться</Button>
        </div>
        <p className={styleReg.forget}>Уже зарегистрированы? <a
          href="src/Pages/PageLogin/PageLogin#">Войти</a></p>
      </form>
    </div>
  );
};

export default FormRegistration;
