import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import AppHeader from '../AppHeader/AppHeader';
import appStyle from './App.module.css';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import Downloader from '../Downloader/Downloader'
import {getIngredients} from "../../services/actions/ingredients";
import PreLoader from "../PreLoader/PreLoader";
import PageLogin from "../../Pages/PageLogin/PageLogin";
import PageRegistration from "../../Pages/PageRegistration/PageRegistration";
import FormForgotPassword from "../Forms/FormForgotPassword/FormForgotPassword";
import FormLogin from "../Forms/FormLogin/FormLogin";
import FormRecoveryPassword from "../Forms/FormRecoveryPassword/FormRecoveryPassword";
import PageRecoveryPassword from "../../Pages/PageRecoveryPassword/PageRecoveryPassword";
import PageProfile from "../../Pages/PageProfile/PageProfile";
import FormProfile from "../Forms/FormProfile/FormProfile";
import AppMain from "../AppMain/AppMain";
import PageMain from "../../Pages/PageMain/PageMain";
import {Route, Routes} from "react-router-dom";
import PageForgotPassword from "../../Pages/PageForgotPassword/PageForgotPassword";


const App = () => {

  return (
    <>
      {/*<PageMain/>*/}
      <Routes>
        <Route path='/'>
          <Route index path='/' element={<PageMain/>}/>
          <Route path='/profile' element={<PageProfile/>}/>
          <Route path='/login' element={<PageLogin/>}/>
          <Route path='/registration' element={<PageRegistration/>}/>
          <Route path='/forgot' element={<PageForgotPassword/>}/>
        </Route>
      </Routes>
    </>
  )
};

export default App
