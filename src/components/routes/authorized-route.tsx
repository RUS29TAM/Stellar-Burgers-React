import React, {FC, ReactElement, ReactNode, useEffect} from 'react';
import useAuthorisation from "../../hooks/useAuthorisation";
import {Navigate} from "react-router-dom";
import PreLoader from "../pre-loader/pre-loader";
import {checkAuthorizedThunk} from "../../services/thunks/checkAuthorizedThunk";
import {AppDispatch} from "../../hooks/appDispatch";

interface IAuthorizedRoute {
    children: ReactNode
}

const AuthorizedRoute: FC<IAuthorizedRoute> = ({children}) => {
    const {isAuth, accept, error} = useAuthorisation()
    const dispatch = AppDispatch()

    useEffect(() => dispatch(checkAuthorizedThunk()), [])
    return (
        !accept ? error ? <Navigate to='/login'/> : <PreLoader/> : isAuth ? children as ReactElement : <Navigate to='/login'/>
    );
};


export default AuthorizedRoute;
