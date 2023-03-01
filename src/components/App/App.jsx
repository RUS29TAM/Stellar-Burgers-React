import {useEffect} from 'react';
import PageLogin from '../../pages/PageLogin/PageLogin';
import PageRegistration from '../../pages/PageRegistration/PageRegistration';
import PageRecoveryPassword from '../../pages/PageRecoveryPassword/PageRecoveryPassword';
import PageProfile from '../../pages/PageProfile/PageProfile';
import PageMain from '../../pages/PageMain/PageMain';
import {Navigate, Route, Routes, useLocation, useNavigate} from "react-router-dom";
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
import PageTape from "../../pages/PageTape/PageTape";
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import ModalIngredientsDetails from "../ModalIngredientsDetails/ModalIngredientsDetails";

const App = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()

  useEffect(() => dispatch(checkAuthorizedThunk()), [])

  return (
    <>
      <AppHeader/>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<PageMain/>}>
            {
                location.state?.from === '/' &&
                <Route index path='ingredients/:id' element={<ModalIngredientsDetails ingredientDetails={location.state.ingredient}/>}/>
            }
          </Route>
          <Route path='/profile' element={<AuthorizedRoute><PageProfile/></AuthorizedRoute>}>
            <Route path='orders' element={<AuthorizedRoute><ProfileHistoryOrders/></AuthorizedRoute>}>
              <Route path=':id' element={<PageOrdersFeed/>}/>
            </Route>
          </Route>
          <Route path='/login' element={<UnauthorizedRoute><PageLogin/></UnauthorizedRoute>}/>
          <Route path='/registration' element={<UnauthorizedRoute><PageRegistration/></UnauthorizedRoute>}/>
          <Route path='/forgot-password' element={<UnauthorizedRoute><PageForgotPassword/></UnauthorizedRoute>}/>
          <Route path='/reset-password' element={<UnauthorizedRoute><PageRecoveryPassword/></UnauthorizedRoute>}/>
          <Route path='/feed' element={<PageTape/>}>
            <Route path=':id' element={<PageOrdersFeed/>}/>
          </Route>
          <Route path='/ingredients/:id' element={<PageIngredientsId/>}/>
          <Route path='*' element={<Navigate to='/'/>}/>
        </Route>
      </Routes>
    </>
  )
};

export default App
