import React from 'react';
import PageLogin from "../../pages/PageLogin/PageLogin";
import PageRegistration from "../../pages/PageRegistration/PageRegistration";
import PageRecoveryPassword from "../../pages/PageRecoveryPassword/PageRecoveryPassword";
import PageProfile from "../../pages/PageProfile/PageProfile";
import PageMain from "../../pages/PageMain/PageMain";
import {Navigate, Route, Routes} from "react-router-dom";
import PageForgotPassword from "../../pages/PageForgotPassword/PageForgotPassword";
import PageHistoryOrders from "../../pages/PageHistoryOrders/PageHistoryOrders";
import PageIngredientsId from "../../pages/PageIngregientsId/PageIngredientsId";

const App = () => {

  return (
    <>
      <Routes>
        <Route path='/'>
          <Route index path='/' element={<PageMain/>}/>
          <Route path='/profile' element={<PageProfile/>}/>
          <Route path='/login' element={<PageLogin/>}/>
          <Route path='/registration' element={<PageRegistration/>}/>
          <Route path='/forgot-password' element={<PageForgotPassword/>}/>
          <Route path='/profile/orders' element={<PageHistoryOrders/>}/>
          <Route path='/reset-password' element={<PageRecoveryPassword/>}/>
          <Route path='/ingredients/:id' element={<PageIngredientsId/>}/>
          <Route path='*' element={<Navigate to='/'/>}/>
        </Route>
      </Routes>
    </>
  )
};

export default App
