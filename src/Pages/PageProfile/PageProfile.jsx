import React from 'react';
import AppHeader from "../../components/AppHeader/AppHeader";
import FormProfile from "../../components/Forms/FormProfile/FormProfile";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import pageProfile from './PageProfile.module.css'

const PageProfile = () => {
  return (
    <>
      <AppHeader/>
      <div className={pageProfile.wrapper}>
        <ProfileInfo/>
        <FormProfile/>
      </div>
    </>
  );
};

export default PageProfile;
