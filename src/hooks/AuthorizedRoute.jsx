import React, {useEffect} from 'react';
import useAuthorisation from "./useAuthorisation";
import {Navigate} from "react-router-dom";
import PropTypes from "prop-types";

const AuthorizedRoute = ({children}) => {
  const {isAuth} = useAuthorisation()
  useEffect(() => console.log(isAuth))
  return (
    isAuth ? children : <Navigate to='/login'/>
  );
};

AuthorizedRoute.propTypes = {
  children: PropTypes.element.isRequired
}

export default AuthorizedRoute;
