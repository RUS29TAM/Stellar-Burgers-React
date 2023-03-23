import React, {FC, ReactElement, ReactNode, useEffect} from 'react';
import useAuthorisation from "../../hooks/use-authorisation";
import {Navigate} from "react-router-dom";
import PreLoader from "../pre-loader/pre-loader";
import {checkAuthorizedThunk} from "../../services/thunks/check-authorized-thunk";
import {AppDispatch} from "../../hooks/app-dispatch";

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
