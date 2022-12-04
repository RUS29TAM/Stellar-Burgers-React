import {BurgerIcon, ListIcon, Logo, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import stylesHeader from './AppHeader.module.css';

const AppHeader = () => {

  return (
    <header className={`header ${stylesHeader.header}`}>
      <div className={`headerContainer ${stylesHeader.headerContainer}`}>
        <nav className={`navigationList ${stylesHeader.navigationList} mb-4`}>
          <ul className={`${stylesHeader.navigationList} pl-3`}>
            <li>
              <a href="#" className={`navigationLink ${stylesHeader.navigationLink} pt-4 pr-5`}>
                <BurgerIcon type="primary"/>
                <span className="text text_type_main-default ml-2">
                  Конструктор
                </span>
              </a>
            </li>
            <li>
              <a href="#" className={`navigationLink ${stylesHeader.navigationLink} pt-4 pl-5`}>
                <ListIcon type="secondary"/>
                <span className="text text_type_main-default text_color_inactive ml-2">
                  Летна заказов
                </span>
              </a>
            </li>
          </ul>
        </nav>
        <div className={`${stylesHeader.logo} pl-3`}>
          <Logo/>
        </div>
        <div className={`personalAccount ${stylesHeader.personalAccount} pr-8`}>
          <a href="#" className={`${stylesHeader.navigationLink}`}>
            <ProfileIcon type="secondary"/>
            <span className="text text_type_main-default text_color_inactive ml-2">
              Личный кабинет
            </span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;

