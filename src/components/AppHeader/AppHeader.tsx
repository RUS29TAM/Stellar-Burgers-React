import {Logo} from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import NavigationPanel from '../NavigationPanel/NavigationPanel'
// @ts-ignore
import AppHeaderStyles from  './AppHeader.module.css'
const AppHeader = () => {

    return (
        <header className={AppHeaderStyles.AppHeader}>
            <NavigationPanel/>
            <Logo/>
        </header>
    );
};

export default AppHeader;