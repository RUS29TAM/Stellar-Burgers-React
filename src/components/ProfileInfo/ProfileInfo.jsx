import React from 'react';
import styleProfileInfo from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div className={`text text_color_primary text_type_main-medium ${styleProfileInfo.wrapper}`}>
      <a className={styleProfileInfo.link} href={"#"} >Профиль</a>
      <a className={styleProfileInfo.link} href={"#"}>История заказов</a>
      <a className={styleProfileInfo.link} href={"#"}>Выход</a>
    </div>

  );
};

export default ProfileInfo;
