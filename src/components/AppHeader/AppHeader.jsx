import {BurgerIcon, ListIcon, Logo, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import stylesHeader from './AppHeader.module.css';
import {NavLink} from "react-router-dom";

const setActiveLink = ({isActive}) => isActive ? `${stylesHeader.navigationLink} pt-4 pr-5 text_color_primary` : `${stylesHeader.navigationLink} pt-4 pr-5 text_color_inactive`;
const AppHeader = () => {
  return (
    <header className={`header ${stylesHeader.header}`}>
      <div className={`headerContainer ${stylesHeader.headerContainer}`}>
        <nav className={`navigationList ${stylesHeader.navigationList} mb-4`}>
          <ul className={`${stylesHeader.navigationList} pl-3`}>
            <li>
              <NavLink to="/" className={setActiveLink}>
                <BurgerIcon type="secondary"/>
                <span className={`${stylesHeader.span} text text_type_main-default ml-2`}>
                  Конструктор
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink className={setActiveLink} to="/feed">
                <ListIcon type="secondary"/>
                <span className={`${stylesHeader.span} text text_type_main-default ml-2`}>
                  Летна заказов
                </span>
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className={`${stylesHeader.logo} pl-3`}>
          <Logo/>
        </div>
        <div className={`personalAccount ${stylesHeader.personalAccount} pr-8`}>
          <NavLink className={setActiveLink} to="/profile">
            <ProfileIcon type="secondary"/>
            <span className={`${stylesHeader.span} text text_type_main-default ml-2`}>
              Личный кабинет
            </span>
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;

