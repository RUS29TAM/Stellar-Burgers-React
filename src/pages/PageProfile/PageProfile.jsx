import React from 'react';
import FormProfile from "../../components/Forms/FormProfile/FormProfile";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import pageProfile from './PageProfile.module.css';
import {useLocation} from "react-router-dom";
import ProfileHistoryOrders from "../../components/ProfileHistoryOrders/ProfileHistoryOrders";

const PageProfile = () => {
  const location = useLocation()
  return (
      <div className={pageProfile.wrapper}>
        <ProfileInfo/>
        {location.pathname === '/profile'
          ?
          <FormProfile/>
          :
          <ProfileHistoryOrders />
        }
      </div>
  );
};

export default PageProfile;
