import React, {useEffect} from 'react';
import PageLogin from '../../pages/PageLogin/PageLogin';
import PageRegistration from '../../pages/PageRegistration/PageRegistration';
import PageRecoveryPassword from '../../pages/PageRecoveryPassword/PageRecoveryPassword';
import PageProfile from '../../pages/PageProfile/PageProfile';
import PageMain from '../../pages/PageMain/PageMain';
import {Navigate, Route, Routes} from "react-router-dom";
import PageForgotPassword from '../../pages/PageForgotPassword/PageForgotPassword';
import PageIngredientsId from '../../pages/PageIngregientsId/PageIngredientsId';
import UnauthorizedRoute from "../Routes/UnauthorizedRoute";
import AuthorizedRoute from "../Routes/AuthorizedRoute";
import {useDispatch} from "react-redux";
import {resetUserAction, setUserAction} from "../../services/actions/user";
import useUserController from "../../hooks/useUserController";
import PageHistoryOrders from "../../pages/PageHistoryOrders/PageHistoryOrders";
import PageOrdersFeed from "../../pages/PageOrdersFeed/PageOrdersFeed";
import AppHeader from "../AppHeader/AppHeader";

const App = () => {

  const dispatch = useDispatch()
  const userConfig = useUserController()


  useEffect(() => {
    userConfig.checkAuth()
      .then((user) => dispatch(setUserAction(user)))
      .catch(() => dispatch(resetUserAction()))
  }, [])

  return (
    <>
      <AppHeader/>
      <Routes>
        <Route path='/'>
          <Route index path='/' element={<PageMain/>}/>
          <Route path='/profile' element={<AuthorizedRoute><PageProfile/></AuthorizedRoute>}/>
          <Route path='/login' element={<UnauthorizedRoute><PageLogin/></UnauthorizedRoute>}/>
          <Route path='/registration' element={<UnauthorizedRoute><PageRegistration/></UnauthorizedRoute>}/>
          <Route path='/forgot-password' element={<UnauthorizedRoute><PageForgotPassword/></UnauthorizedRoute>}/>
          <Route path='/profile/orders' element={<AuthorizedRoute><PageHistoryOrders/></AuthorizedRoute>}/>
          <Route path='/reset-password' element={<UnauthorizedRoute><PageRecoveryPassword/></UnauthorizedRoute>}/>
          <Route path='/ingredients/:id' element={<PageIngredientsId/>}/>
          <Route path='/feed' element={<UnauthorizedRoute><PageOrdersFeed/></UnauthorizedRoute>}/>
          <Route path='*' element={<Navigate to='/'/>}/>
        </Route>
      </Routes>
    </>
  )
};

export default App
