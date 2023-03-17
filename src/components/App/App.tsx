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
import ProfileHistoryOrders from "../ProfileHistoryOrders/ProfileHistoryOrders";
import PageOrdersFeed from "../../pages/PageOrdersFeed/PageOrdersFeed";
import AppHeader from "../AppHeader/AppHeader";
import {checkAuthorizedThunk} from "../../services/thunks/checkAuthorizedThunk";
import Layout from "../Layout/Layout";
import PageTape from "../../pages/PageTape/PageTape";
import Modal from "../Modal/Modal";
import ModalIngredientsDetails from "../ModalIngredientsDetails/ModalIngredientsDetails";
import OrderData from "../OrderData/OrderData";
import {ingredientsThunk} from "../../services/thunks/ingredientsThunk";
import {AppDispatch} from "../../hooks/appDispatch";

const App = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = AppDispatch()

    // @ts-ignore
    useEffect(() => dispatch(checkAuthorizedThunk()), [])
    // @ts-ignore
    useEffect(() => dispatch(ingredientsThunk()), [])

    return (
        <>
            <AppHeader/>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route path='/' element={<PageMain/>}>
                            {location.state?.from === '/' &&
                            <Route index path='ingredients/:id'
                                   element={<ModalIngredientsDetails ingredientDetails={location.state.ingredient}/>}/>}
                    </Route>
                    <Route path='/profile' element={<AuthorizedRoute><PageProfile/></AuthorizedRoute>}>
                        <Route path='orders' element={<ProfileHistoryOrders/>}>
                            {location.state?.from === "profile" && <Route path=":id"
                                                                          element={<Modal setOpen={() => navigate(-1)}
                                                                                          children={<OrderData
                                                                                              orderData={location.state.order}/>}/>}/>}
                        </Route>
                    </Route>
                    <Route path="/profile/orders/:id" element={<AuthorizedRoute><PageOrdersFeed/></AuthorizedRoute>}/>
                    <Route path='/login' element={<UnauthorizedRoute><PageLogin/></UnauthorizedRoute>}/>
                    <Route path='/registration' element={<UnauthorizedRoute><PageRegistration/></UnauthorizedRoute>}/>
                    <Route path='/forgot-password'
                           element={<UnauthorizedRoute><PageForgotPassword/></UnauthorizedRoute>}/>
                    <Route path='/reset-password'
                           element={<UnauthorizedRoute><PageRecoveryPassword/></UnauthorizedRoute>}/>
                    <Route path='/feed' element={<PageTape/>}>
                        {location.state?.from === "feed" && <Route path=":id"
                                                                   element={<Modal setOpen={() => navigate(-1)}
                                                                                   children={<OrderData
                                                                                       orderData={location.state.order}/>}/>}/>}</Route>
                    <Route path="/feed/:id" element={<PageOrdersFeed/>}/>
                    <Route path='/ingredients/:id' element={<PageIngredientsId/>}/>
                    <Route path='*' element={<Navigate to='/'/>}/>
                </Route>
            </Routes>
        </>
    )
};

export default App
