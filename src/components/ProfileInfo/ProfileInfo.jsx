import React from 'react';
import styleProfileInfo from './ProfileInfo.module.css'
import {NavLink} from "react-router-dom";

const setActiveLink = ({isActive}) => isActive ? `${styleProfileInfo.link} text_color_primary` : `${styleProfileInfo.link} text_color_inactive`;

const ProfileInfo = () => {
  return (
    <div className={`text text_color_primary text_type_main-medium ${styleProfileInfo.wrapper}`}>
      <NavLink className={setActiveLink} to="/profile" >Профиль</NavLink>
      <NavLink className={setActiveLink} to="/profile/orders">История заказов</NavLink>
      <NavLink className={setActiveLink} to="/">Выход</NavLink>
    </div>
  );
};

export default ProfileInfo;
