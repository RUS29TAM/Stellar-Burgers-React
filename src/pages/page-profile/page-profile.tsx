import React from 'react';
import FormProfile from "../../components/forms/form-profile/form-profile";
import ProfileInfo from "../../components/profile-info/profile-info";
import pageProfile from './page-profile.module.css';
import {useLocation} from "react-router-dom";
import ProfileHistoryOrders from "../../components/profile-history-orders/profile-history-orders";

const PageProfile = () => {
    const location = useLocation()
    return (
        <div className={pageProfile.wrapper}>
            <div className={pageProfile.container}>
                <ProfileInfo/>
                {location.pathname === '/profile'
                    ?
                    <FormProfile/>
                    :
                    <ProfileHistoryOrders ispageprofile={true} extraClass={''}/>
                }
            </div>
        </div>
    );
};

export default PageProfile;
