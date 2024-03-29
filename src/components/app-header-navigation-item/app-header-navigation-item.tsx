import React, {FC} from 'react';
import {NavLink, useMatch} from "react-router-dom";
import {BurgerIcon, ListIcon, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import stylesHeader from "../app-header/app-header.module.css";

interface IAppHeaderNavigationItem {
    to: string,
    children: string,
    iconComponentName?: TIconComponentName,
}

type TIconComponentName = 'BurgerIcon' | 'ListIcon' | 'ProfileIcon'

const AppHeaderNavigationItem: FC<IAppHeaderNavigationItem> = ({to, children, iconComponentName}) => {
    const isActive = useMatch(to)

    const setActiveLink = ({isActive}: any) => isActive ? `${stylesHeader.navigationLink} pt-4 pr-5 text_color_primary` : `${stylesHeader.navigationLink} pt-4 pr-5 text_color_inactive`;
    const getIcon = () => {
        if (iconComponentName === 'BurgerIcon') {
            return <BurgerIcon type={isActive ? "primary" : "secondary"}/>
        }
        if (iconComponentName === 'ListIcon') {
            return <ListIcon type={isActive ? "primary" : "secondary"}/>
        }
        if (iconComponentName === 'ProfileIcon') {
            return <ProfileIcon type={isActive ? "primary" : "secondary"}/>
        }
    }

    return (<NavLink to={to} className={setActiveLink}>
        {iconComponentName && getIcon()}
        <span className={`${stylesHeader.span} text text_type_main-default ml-2`}>
        {children}
      </span>
    </NavLink>);
};

export default AppHeaderNavigationItem;
