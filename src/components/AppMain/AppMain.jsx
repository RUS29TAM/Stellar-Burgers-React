import React, {useEffect} from 'react';
import appStyle from "../App/App.module.css";
import Downloader from "../Downloader/Downloader";
import PreLoader from "../PreLoader/PreLoader";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import {useDispatch, useSelector} from "react-redux";
import {getIngredients} from "../../services/actions/ingredients";
import {Outlet} from "react-router-dom";


const AppMain = () => {
  const dispatch = useDispatch();
  const {isLoading, isError} = useSelector((store) => store.ingredients);

  useEffect(() => {
    dispatch(getIngredients());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
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
)
  ;
};

export default AppMain;