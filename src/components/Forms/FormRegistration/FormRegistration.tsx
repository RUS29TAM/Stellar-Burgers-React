import React, {ChangeEvent, FormEvent, useState} from 'react';
import styleReg from "./FormRegistration.module.css";
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useNavigate} from "react-router-dom";
import useUserController from "../../../hooks/useUserController";
import {setUserAction} from "../../../services/actions/userAction";
import {AppDispatch} from "../../../hooks/appDispatch";

const FormRegistration = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
    const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)
    const onNameChange = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)
    const dispatch = AppDispatch()
    const userConfig = useUserController()
    const navigate = useNavigate()

    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
        if (name && email && password) {
            userConfig.registration(name, email, password)
                .then(user => {
                    dispatch(setUserAction(user))
                    navigate(-1)
                })
        }
    }

    return (
        <div className={styleReg.container}>
            <form className={styleReg.form} onSubmit={onSubmit}>
                <h2 className={'text text_type_main-medium'}>Регистрация</h2>
                <Input type="text"
                       placeholder="Имя"
                       onChange={onNameChange} value={name}/>
                <EmailInput placeholder="E-mail"
                            onChange={onEmailChange}
                            value={email}/>
                <PasswordInput placeholder="Пароль"
                               onChange={onPasswordChange}
                               value={password}/>
                <Button type="primary" value="Войти" htmlType={"submit"}>Зарегистрироваться</Button>
                <p className={`text text_type_main-default text_color_inactive ${styleReg.text}`}>Уже зарегистрированы?
                    <Link className={styleReg.link} to="/login">&nbsp;Войти</Link>
                </p>
            </form>
        </div>
    );
};

export default FormRegistration;
