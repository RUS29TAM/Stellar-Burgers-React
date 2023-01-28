import React from 'react';
import useAuthorisation from "./useAuthorisation";
import {Navigate} from "react-router-dom";
import PropTypes from "prop-types";

const UnauthorizedRoute = ({props}) => {
  const {isAuth} = useAuthorisation()
  return (
    !isAuth ? props : <Navigate to='/'/>
  )
};

UnauthorizedRoute.propTypes = {
  props: PropTypes.element.isRequired
}

export default UnauthorizedRoute;
