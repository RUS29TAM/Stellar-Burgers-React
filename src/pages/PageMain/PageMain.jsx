import React from 'react';
import AppMain from "../../components/AppMain/AppMain";
import {Outlet} from "react-router-dom";

const PageMain = () => {
    return (
        <>
            <AppMain/>
            <Outlet/>
        </>
    );
};

export default PageMain;
