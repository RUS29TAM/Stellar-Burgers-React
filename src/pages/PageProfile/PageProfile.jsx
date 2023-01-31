import React from 'react';
import AppHeader from "../../components/AppHeader/AppHeader";
import FormProfile from "../../components/Forms/FormProfile/FormProfile";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import pageProfile from './PageProfile.module.css'
import {useLocation} from "react-router-dom";

const PageProfile = () => {
  const location = useLocation()
  return (
    <>
      <AppHeader/>
      <div className={pageProfile.wrapper}>
        <ProfileInfo/>
        {location.pathname === '/profile'
          ?
          <FormProfile/>
          :
          null
        }
      </div>
    </>
  );
};

export default PageProfile;
