import React from 'react';
import PageLogin from "../../Pages/PageLogin/PageLogin";
import PageRegistration from "../../Pages/PageRegistration/PageRegistration";
import PageRecoveryPassword from "../../Pages/PageRecoveryPassword/PageRecoveryPassword";
import PageProfile from "../../Pages/PageProfile/PageProfile";
import PageMain from "../../Pages/PageMain/PageMain";
import {Navigate, Route, Routes} from "react-router-dom";
import PageForgotPassword from "../../Pages/PageForgotPassword/PageForgotPassword";
import PageHistoryOrders from "../../Pages/PageHistoryOrders/PageHistoryOrders";
import PageIngredientsId from "../../Pages/PageIngregientsId/PageIngredientsId";

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
