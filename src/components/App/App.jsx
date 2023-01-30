import React, {useEffect} from 'react';
import PageLogin from '../../Pages/PageLogin/PageLogin';
import PageRegistration from '../../Pages/PageRegistration/PageRegistration';
import PageRecoveryPassword from '../../Pages/PageRecoveryPassword/PageRecoveryPassword';
import PageProfile from '../../Pages/PageProfile/PageProfile';
import PageMain from '../../Pages/PageMain/PageMain';
import {Navigate, Route, Routes} from "react-router-dom";
import PageForgotPassword from '../../Pages/PageForgotPassword/PageForgotPassword';
import PageIngredientsId from '../../Pages/PageIngregientsId/PageIngredientsId';
import UnauthorizedRoute from "../Routes/UnauthorizedRoute";
import AuthorizedRoute from "../Routes/AuthorizedRoute";
import {useDispatch} from "react-redux";
import {resetUserAction, setUserAction} from "../../services/actions/user";
import useUserConfig from "../../hooks/useUserConfig";
import PageHistoryOrders from "../../Pages/PageHistoryOrders/PageHistoryOrders";

const App = () => {

  const dispatch = useDispatch()
  const userConfig = useUserConfig()


  useEffect(() => {
    userConfig.checkAuth()
      .then((user) => dispatch(setUserAction(user)))
      .catch(() => dispatch(resetUserAction()))
  }, [])

  return (
    <>
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
          <Route path='*' element={<Navigate to='/'/>}/>
        </Route>
      </Routes>
    </>
  )
};

export default App
