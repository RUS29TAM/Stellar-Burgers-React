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
// import FormLogin from "../Forms/FormLogin/FormLogin";

const App = () => {
  const dispatch = useDispatch();
  const {isLoading, isError} = useSelector((store) => store.ingredients);

  useEffect(() => {
    dispatch(getIngredients());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <AppHeader/>
      <FormProfile />
      {/*<div className={`${appStyle.page}`}>*/}
      {/*  <main className={`${appStyle.main}`}>*/}
      {/*    {isLoading && <Downloader type='loading'/> && <PreLoader/>}*/}
      {/*    {isError && <Downloader type='error'/>}*/}
      {/*    {(!isLoading && !isError) && (*/}
      {/*      <DndProvider backend={HTML5Backend}>*/}
      {/*        <BurgerIngredients/>*/}
      {/*        <BurgerConstructor/>*/}
      {/*      </DndProvider>*/}
      {/*    )}*/}
      {/*  </main>*/}
      {/*</div>*/}

    </>
  )
};

export default App
