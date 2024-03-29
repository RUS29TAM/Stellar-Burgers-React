import React, {ChangeEvent, FormEvent, useState} from 'react';
import styleLogin from "./form-login.module.css";
import {Button, EmailInput, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useNavigate} from "react-router-dom";
import useUserController from "../../../hooks/use-user-controller";
import {setUserAction} from "../../../services/actions/user-action";
import {AppDispatch} from "../../../hooks/app-dispatch";

const FormLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
    const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)
    const dispatch = AppDispatch()
    const userConfig = useUserController()
    const navigate = useNavigate()

    const onSubmit = (e: FormEvent) => {
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
                                <EmailInput placeholder="E-mail"
                                            onChange={onEmailChange}
                                            value={email}/>
                            </div>
                            <div className={styleLogin.inputBox}>
                                <PasswordInput placeholder="Введите пароль"
                                               onChange={onPasswordChange}
                                               value={password}/>
                            </div>
                            <div className={styleLogin.inputBox}>
                                <Button type="primary"
                                        value="Войти"
                                        htmlType={"submit"}>Войти</Button>
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
