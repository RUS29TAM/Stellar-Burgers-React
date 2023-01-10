import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import AppHeader from '../AppHeader/AppHeader';
import appStyle from './App.module.css';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import Downloader from '../Downloader/Downloader'
// import {api} from '../Api/Api';
import {getIngredients} from "../../services/actions/ingredients";
import PreLoader from "../PreLoader/PreLoader";

const App = () => {
  const dispatch = useDispatch();
  const {isLoading, isError} = useSelector((store) => store.ingredients);

  useEffect(() => {
    // @ts-ignore
    dispatch(getIngredients());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <AppHeader/>
      <div className={`${appStyle.page}`}>
        <main className={`${appStyle.main}`}>
          {isLoading && <Downloader type='loading'/> && <PreLoader/>}
          {isError && <Downloader type='error'/>}
          {(!isLoading && !isError) && (
            <DndProvider backend={HTML5Backend}>
              <BurgerIngredients/>
              <BurgerConstructor/>
            </DndProvider>
          )}
        </main>
      </div>
    </>
  )
};

export default App
