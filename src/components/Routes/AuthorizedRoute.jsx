import React, {useEffect} from 'react';
import useAuthorisation from "../../hooks/useAuthorisation";
import {Navigate} from "react-router-dom";
import PropTypes from "prop-types";
import PreLoader from "../PreLoader/PreLoader";
import {useDispatch} from "react-redux";
import {checkAuthorizedThunk} from "../../services/thunks/checkAuthorizedThunk";

const AuthorizedRoute = ({children}) => {
    const {isAuth, accept, error} = useAuthorisation()
    const dispatch = useDispatch()

    useEffect(() => dispatch(checkAuthorizedThunk()), [])
    return (
        !accept ? error ? <Navigate to='/login'/> : <PreLoader/> : isAuth ? children : <Navigate to='/login'/>
    );
};

AuthorizedRoute.propTypes = {
    children: PropTypes.element.isRequired
}

export default AuthorizedRoute;
