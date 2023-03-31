import React, {FC, ReactElement, ReactNode} from 'react';
import useAuthorisation from "../../hooks/use-authorisation";
import {Navigate} from "react-router-dom";

interface IUnauthorizedRoute {
    children: ReactNode
}
const UnauthorizedRoute:FC<IUnauthorizedRoute> = ({children}) => {
    const {isAuth} = useAuthorisation()
    return (
        !isAuth ? children as ReactElement : <Navigate to='/'/>
    )
};

export default UnauthorizedRoute;
