import React from 'react';
import AppMain from "../../components/AppMain/AppMain";
import AppHeader from "../../components/AppHeader/AppHeader";
import {Outlet} from "react-router-dom";

const PageMain = () => {
  return (
    <>
      <AppHeader/>
      <AppMain/>
    </>
  );
};

export default PageMain;
