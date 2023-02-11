import React from 'react';
import useAuthorisation from "../../hooks/useAuthorisation";
import {Navigate} from "react-router-dom";
import PropTypes from "prop-types";
import PreLoader from "../PreLoader/PreLoader";

const AuthorizedRoute = ({children}) => {
  const {isAuth, accept} = useAuthorisation()
  return (
    !accept ? <PreLoader/> : isAuth ? children : <Navigate to='/login'/>
  );
};

AuthorizedRoute.propTypes = {
  children: PropTypes.element.isRequired
}

export default AuthorizedRoute;
