import React from 'react';
import useAuthorisation from "../../hooks/useAuthorisation";
import {Navigate} from "react-router-dom";
import PropTypes from "prop-types";

const UnauthorizedRoute = ({children}) => {
    const {isAuth} = useAuthorisation()
    return (
        !isAuth ? children : <Navigate to='/'/>
    )
};

UnauthorizedRoute.propTypes = {
    children: PropTypes.element.isRequired
}

export default UnauthorizedRoute;
