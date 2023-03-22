import React from 'react';
import FormRecoveryPassword from "../../components/Forms/FormRecoveryPassword/FormRecoveryPassword";
import {Navigate, useLocation} from "react-router-dom";

const PageRecoveryPassword = () => {
    const location = useLocation()
    return (
        location.state?.from === '/forgot'
            ?
            <FormRecoveryPassword/>
            :
            <Navigate to='/'/>
    );
};

export default PageRecoveryPassword;
