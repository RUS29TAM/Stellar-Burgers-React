import {BurgerIcon, ListIcon, Logo, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import stylesHeader from './AppHeader.module.css';
import {Link} from "react-router-dom";

const AppHeader = () => {
  return (
    <header className={`header ${stylesHeader.header}`}>
      <div className={`headerContainer ${stylesHeader.headerContainer}`}>
        <nav className={`navigationList ${stylesHeader.navigationList} mb-4`}>
          <ul className={`${stylesHeader.navigationList} pl-3`}>
            <li>
              <Link to="/" className={`navigationLink ${stylesHeader.navigationLink} pt-4 pr-5`}>
                <BurgerIcon type="secondary"/>
                <span className="text text_type_main-default text_color_inactive ml-2">
                  Конструктор
                </span>
              </Link>
            </li>
            <li>
              <Link to="/orders" className={`navigationLink ${stylesHeader.navigationLink} pt-4 pl-5`}>
                <ListIcon type="secondary"/>
                <span className="text text_type_main-default text_color_inactive ml-2">
                  Летна заказов
                </span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className={`${stylesHeader.logo} pl-3`}>
          <Logo/>
        </div>
        <div className={`personalAccount ${stylesHeader.personalAccount} pr-8`}>
          <Link className={`${stylesHeader.navigationLink}`} to="/profile">
            <ProfileIcon type="secondary"/>
            <span className="text text_type_main-default text_color_inactive ml-2">
              Личный кабинет
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;

