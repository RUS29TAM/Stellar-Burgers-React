import {useEffect} from 'react';
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
import ProfileHistoryOrders from "../ProfileHistoryOrders/ProfileHistoryOrders";
import PageOrdersFeed from "../../pages/PageOrdersFeed/PageOrdersFeed";
import AppHeader from "../AppHeader/AppHeader";
import {checkAuthorizedThunk} from "../../services/thunks/checkAuthorizedThunk";
import Layout from "../Layout/Layout";

const App = () => {

  const dispatch = useDispatch()
  useEffect(() => dispatch(checkAuthorizedThunk()), [])

  return (
    <>
      <AppHeader/>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index path='/' element={<PageMain/>}/>
          <Route path='/profile' element={<AuthorizedRoute><PageProfile/></AuthorizedRoute>}/>
          <Route path='/login' element={<UnauthorizedRoute><PageLogin/></UnauthorizedRoute>}/>
          <Route path='/registration' element={<UnauthorizedRoute><PageRegistration/></UnauthorizedRoute>}/>
          <Route path='/forgot-password' element={<UnauthorizedRoute><PageForgotPassword/></UnauthorizedRoute>}/>
          <Route path='/profile/orders' element={<AuthorizedRoute><ProfileHistoryOrders/></AuthorizedRoute>}/>
          <Route path='/reset-password' element={<UnauthorizedRoute><PageRecoveryPassword/></UnauthorizedRoute>}/>
          <Route path='/ingredients/:id' element={<PageIngredientsId/>}/>
          <Route path='/feed' element={<PageOrdersFeed/>}/>
          <Route path='*' element={<Navigate to='/'/>}/>
        </Route>
      </Routes>
    </>
  )
};

export default App
