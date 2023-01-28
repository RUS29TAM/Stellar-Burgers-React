import React, {useEffect} from 'react';
import PageLogin from "../../pages/PageLogin/PageLogin";
import PageRegistration from "../../pages/PageRegistration/PageRegistration";
import PageRecoveryPassword from "../../pages/PageRecoveryPassword/PageRecoveryPassword";
import PageProfile from "../../pages/PageProfile/PageProfile";
import PageMain from "../../pages/PageMain/PageMain";
import {Navigate, Route, Routes} from "react-router-dom";
import PageForgotPassword from "../../pages/PageForgotPassword/PageForgotPassword";
import PageHistoryOrders from "../../pages/PageHistoryOrders/PageHistoryOrders";
import PageIngredientsId from "../../pages/PageIngregientsId/PageIngredientsId";
import unauthorizedRoute from "../../hooks/unauthorizedRoute";
import authorizedRoute from "../../hooks/authorizedRoute";
import {useDispatch} from "react-redux";
import useUserConfig from "../../hooks/useUserConfig";

const App = () => {


  return (
    <>
      <Routes>
        <Route path='/'>
          <Route index path='/' element={<PageMain/>}/>
          <Route path='/profile' element={<authorizedRoute><PageProfile/></authorizedRoute>}/>
          <Route path='/login' element={<unauthorizedRoute><PageLogin/></unauthorizedRoute>}/>
          <Route path='/registration' element={<unauthorizedRoute><PageRegistration/></unauthorizedRoute>}/>
          <Route path='/forgot-password' element={<unauthorizedRoute><PageForgotPassword/></unauthorizedRoute>}/>
          <Route path='/profile/orders' element={<authorizedRoute><PageHistoryOrders/></authorizedRoute>}/>
          <Route path='/reset-password' element={<unauthorizedRoute><PageRecoveryPassword/></unauthorizedRoute>}/>
          <Route path='/ingredients/:id' element={<PageIngredientsId/>}/>
          <Route path='*' element={<Navigate to='/'/>}/>
        </Route>
      </Routes>
    </>
  )
};

export default App
