import {useEffect} from 'react';
import PageLogin from '../../pages/page-login/page-login';
import PageRegistration from '../../pages/page-registration/page-registration';
import PageRecoveryPassword from '../../pages/page-recovery-password/page-recovery-password';
import PageProfile from '../../pages/page-profile/page-profile';
import PageMain from '../../pages/page-main/page-main';
import {Navigate, Route, Routes, useLocation, useNavigate} from "react-router-dom";
import PageForgotPassword from '../../pages/page-forgot-password/page-forgot-password';
import PageIngredientsId from '../../pages/page-ingregients-id/page-ingregients-id';
import UnauthorizedRoute from "../routes/unauthorized-route";
import AuthorizedRoute from "../routes/authorized-route";
import ProfileHistoryOrders from "../profile-history-orders/profile-history-orders";
import PageOrdersFeed from "../../pages/page-orders-feed/page-orders-feed";
import AppHeader from "../app-header/app-header";
import {checkAuthorizedThunk} from "../../services/thunks/checkAuthorizedThunk";
import Layout from "../layout/layout";
import PageTape from "../../pages/page-tape/page-tape";
import Modal from "../modal/modal";
import ModalIngredientsDetails from "../modal-ingredients-details/modal-ingredients-details";
import OrderData from "../order-data/order-data";
import {ingredientsThunk} from "../../services/thunks/ingredientsThunk";
import {AppDispatch} from "../../hooks/appDispatch";

const App = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = AppDispatch()

    useEffect(() => dispatch(checkAuthorizedThunk()), [])
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
                        <Route path='orders' element={<ProfileHistoryOrders ispageprofile={true} extraClass={''}/>}>
                            {location.state?.from === "profile" && <Route path=":id"
                                                                          element={<Modal setOpen={() => navigate(-1)}
                                                                                          children={<OrderData
                                                                                              isModal={true}
                                                                                              extraClass={''} key={''}
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
                                                                                   children={<OrderData isModal={true}
                                                                                                        extraClass={''}
                                                                                                        key={''}
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
