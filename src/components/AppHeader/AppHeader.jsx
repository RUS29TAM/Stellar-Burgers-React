import {Logo} from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import stylesHeader from './AppHeader.module.css';
import AppHeaderNavigationItem from "../AppHeaderNavigationItem/AppHeaderNavigationItem";

const AppHeader = () => {
  return (
    <header className={`header ${stylesHeader.header}`}>
      <div className={`headerContainer ${stylesHeader.headerContainer}`}>
        <nav className={`navigationList ${stylesHeader.navigationList} mb-4`}>
          <ul className={`${stylesHeader.navigationList} pl-3`}>
            <li>
              <AppHeaderNavigationItem iconComponentName="BurgerIcon" to={'/'}>Конструктор</AppHeaderNavigationItem>
            </li>
            <li>
              <AppHeaderNavigationItem iconComponentName="ListIcon" to={'/feed'}>Лента заказов</AppHeaderNavigationItem>
            </li>
          </ul>
        </nav>
        <div className={`${stylesHeader.logo} pl-3`}>
          <Logo/>
        </div>
        <div className={`personalAccount ${stylesHeader.personalAccount} pr-8`}>
          <AppHeaderNavigationItem iconComponentName="ProfileIcon" to={'/profile'}>Личный кабинет</AppHeaderNavigationItem>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;

