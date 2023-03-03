import React, {useEffect, useState} from 'react';
import styleProfile from './FormProfile.module.css';
import {Button, EmailInput, Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import useUserController from "../../../hooks/useUserController";

const FormProfile = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const onEmailChange = e => setEmail(e.target.value)
    const onPasswordChange = e => setPassword(e.target.value)
    const onNameChange = e => setName(e.target.value)
    const userConfig = useUserController()
    const [userInfo, setUserinfo] = useState(null)
    const editUserInfo = userInfo === '' ? false : userInfo?.name !== name || userInfo.email !== email || password !== ''

    const resetUserInfo = () => {
        setName(userInfo.name)
        setEmail(userInfo.email)
        setPassword('')
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (editUserInfo) {
            userConfig.updateProfileInfo(name, email, password)
                .then(user => {
                    setUserinfo(user)
                })
                .then(() => resetUserInfo())
        }
    }

    useEffect(() => {
        userConfig.getUser()
            .then(user => setUserinfo(user))
// eslint-disable-next-line
    }, [])

    useEffect(() => {
        if (userInfo) {
            setName(userInfo.name)
            setEmail(userInfo.email)
        }
    }, [userInfo])

    return (
        <div className={styleProfile.container}>
            <form className={styleProfile.form} onSubmit={onSubmit} onReset={resetUserInfo}>
                <Input className={`text text_type_main-small ${styleProfile.inputIcon}`}
                       type="text" placeholder="Имя"
                       onChange={onNameChange}
                       value={name}/>
                <EmailInput className={`text text_type_main-small ${styleProfile.inputIcon}`}
                            type="email"
                            placeholder="Логин"
                            onChange={onEmailChange}
                            value={email}/>
                <PasswordInput type="password"
                               placeholder="Пароль"
                               onChange={onPasswordChange}
                               value={password}/>
                {editUserInfo &&
                    <div className={styleProfile.btnWrapper}>
                        <Button type="secondary" value="Войти" htmlType={"reset"}>Отмена</Button>
                        <Button type="primary" value="Войти" htmlType={"submit"}>Сохранить</Button>
                    </div>
                }
            </form>
        </div>
    );
};

export default FormProfile;
