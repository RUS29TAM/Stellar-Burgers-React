import React from 'react';
import styleProfileInfo from './profile-info.module.css'
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import useUserController from "../../hooks/use-user-controller";
import {resetUserAction} from "../../services/actions/user-action";
import {AppDispatch} from "../../hooks/app-dispatch";


const setActiveLink = ({isActive}: any) => isActive ? `${styleProfileInfo.link} text_color_primary` : `${styleProfileInfo.link} text_color_inactive`;

const ProfileInfo = () => {
    const userConfig = useUserController()
    const dispatch = AppDispatch()
    const navigate = useNavigate()
    const location = useLocation()

    const logOut = () => userConfig.logOut().then(() => dispatch(resetUserAction())).then(() => navigate('/login'))

    return (
        <div className={`text text_color_primary text_type_main-medium ${styleProfileInfo.wrapper}`}>
            <NavLink
                className={location.pathname === '/profile' ? setActiveLink : `${styleProfileInfo.link} text_color_inactive`}
                to="/profile" replace={true}>Профиль</NavLink>
            <NavLink className={location.pathname === '/profile/orders' ? setActiveLink : setActiveLink}
                     to="/profile/orders" replace={true}>История заказов</NavLink>
            <NavLink className={setActiveLink} onClick={logOut} to="/">Выход</NavLink>
        </div>

    );
};

export default ProfileInfo;
