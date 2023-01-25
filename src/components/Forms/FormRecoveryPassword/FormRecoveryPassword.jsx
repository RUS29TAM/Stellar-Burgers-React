import React, {useState} from 'react';
import styleRecoveryPass from "./FormRecoveryPassword.module.css";
import {Button, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";

const FormRecoveryPassword = () => {
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const onPasswordChange = e => setPassword(e.target.value)
  const onNameChange = e => setName(e.target.value)
  return (
    <div className={styleRecoveryPass.container}>
      <form className={styleRecoveryPass.form}>
        <h2 className={'text text_type_main-medium'}>Восстановление пароля</h2>
        <PasswordInput type="password" placeholder="Введите новый пароль" onChange={onPasswordChange} value={password}/>
        <Input type="text" placeholder="Введите код из письма" onChange={onNameChange} value={name}/>
        <Button type="primary" value="Войти" htmlType={"submit"}>Сохранить</Button>
        <p className={`text text_type_main-default text_color_inactive ${styleRecoveryPass.text}`}>Вспомнили пароль? <a
          className={styleRecoveryPass.link}
          href="src/Pages/PageLogin/PageLogin#">Войти</a></p>
      </form>
    </div>
  );
};

export default FormRecoveryPassword;
