import React, {useState} from 'react';
import styleProfile from './FormProfile.module.css'
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";

const FormProfile = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const onEmailChange = e => setEmail(e.target.value)
  const onPasswordChange = e => setPassword(e.target.value)
  const onNameChange = e => setName(e.target.value)

  return (
    <div className={styleProfile.container}>
      <form className={styleProfile.form}>
        <Input type="text" placeholder="Имя" onChange={onNameChange} value={name}/>
        <EmailInput type="email" placeholder="Логин" onChange={onEmailChange} value={email}/>
        <PasswordInput type="password" placeholder="Пароль" onChange={onPasswordChange}
                       value={password}/>
        <Button type="primary" value="Войти" htmlType={"reset"}>Отмена</Button>
        <Button type="primary" value="Войти" htmlType={"submit"}>Сохранить</Button>
      </form>
    </div>
  );
};

export default FormProfile;
