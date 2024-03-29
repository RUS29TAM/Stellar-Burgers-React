import React, {ChangeEvent, FormEvent, useState} from 'react';
import styleRecoveryPass from "./form-recovery-password.module.css";
import {Button, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import useUserController from "../../../hooks/use-user-controller";
import {Link, useNavigate} from "react-router-dom";

const FormRecoveryPassword = () => {
    const [password, setPassword] = useState('')
    const [code, setCode] = useState('')
    const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)
    const onNameChange = (e: ChangeEvent<HTMLInputElement>) => setCode(e.target.value)
    const userConfig = useUserController()
    const navigate = useNavigate()

    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
        if (code) {
            userConfig.resetPasswordAgree(password, code).then(() => navigate('/login'));
        }
    }

    return (
        <div className={styleRecoveryPass.container}>
            <form className={styleRecoveryPass.form} onSubmit={onSubmit}>
                <h2 className={'text text_type_main-medium'}>Восстановление пароля</h2>
                <PasswordInput placeholder="Введите новый пароль" onChange={onPasswordChange}
                               value={password}/>
                <Input type="text" placeholder="Введите код из письма" onChange={onNameChange} value={code}/>
                <Button type="primary" value="Войти" htmlType={"submit"}>Сохранить</Button>
                <p className={`text text_type_main-default text_color_inactive ${styleRecoveryPass.text}`}>Вспомнили
                    пароль?
                    <Link className={styleRecoveryPass.link} to="/login">&nbsp;Войти</Link>
                </p>
            </form>
        </div>
    );
};

export default FormRecoveryPassword;
