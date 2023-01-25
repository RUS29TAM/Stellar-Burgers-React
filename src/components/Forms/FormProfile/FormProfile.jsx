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
        <Input className={styleProfile.inputIcon} type="text" placeholder="Имя" onChange={onNameChange} value={name}/>
        <EmailInput className={styleProfile.inputIcon} type="email" placeholder="Логин" onChange={onEmailChange} value={email}/>
        <PasswordInput type="password" placeholder="Пароль" onChange={onPasswordChange} value={password}/>
        <div className={styleProfile.btnWrapper}>
          {/*<a className={`text text_type_main-default ${styleReg.link}`}*/}
          {/*   href="src/Pages/PageLogin/PageLogin#">Отмена</a>*/}
          <Button type="secondary" value="Войти" htmlType={"reset"}>Отмена</Button> {/*по макету должна быть кнопка, но тогда в PixelPerfect не попадаю, шинина кнопок
           "primary" и "secondary" не позволяет добиться совпадения*/}
          <Button type="primary" value="Войти" htmlType={"submit"}>Сохранить</Button>
        </div>
      </form>
    </div>
  );
};

export default FormProfile;
