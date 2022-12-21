import React, {useState, useEffect} from 'react';
import AppHeader from '../app-header/app-header';
import appStyle from './app.module.css';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import Downloader from '../downloader/downloader'
import {api} from '../api/api';
import Preloader from '../preloader/preloader';
import {DndProvider} from "react-dnd";
import {useDispatch, useSelector} from "react-redux";
import {HTML5Backend} from "react-dnd-html5-backend";
import {getIngredients} from "../../services/action/ingredients";

//
// const App = () => {
//   const [ingredientsData, setIngredientsData] = useState({
//     ingredient: [],
//     isLoading: false,
//     isError: false,
//   });
//
//   const mustDisplayContent = !ingredientsData.isLoading && !ingredientsData.isError && ingredientsData.ingredient.length > 0;
//   useEffect(() => {
//     setIngredientsData((prevState) => ({...prevState, isLoading: true,}));
//     api.getIngredients()
//       .then(data => setIngredientsData((prevState) => ({...prevState, isLoading: false, ingredient: data.data,})))
//       .catch(error => setIngredientsData((prevState) => ({...prevState, isError: true, isLoading: false,})))
//   }, []);


export const App = () => {
  const dispatch = useDispatch();
  const { isLoading, isError } = useSelector((store) => store.ingredients);

  // загрузка данных при монтировании
  useEffect(() => {
    dispatch(getIngredients());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <AppHeader/>
      <div className={`${appStyle.page}`}>
        <main className={`${appStyle.main}`}>
          {isLoading && <Downloader type='loading'/> && <Preloader/>}
          {isError && <Downloader type='error'/>}
          {/*{mustDisplayContent && (*/}
          {/*  <>*/}
          {(!isLoading && !isError) && (
              <DndProvider backend={HTML5Backend}>
              <BurgerIngredients /*ingredients={ingredientsData.ingredient}*//>
              <BurgerConstructor /*ingredients={ingredientsData.ingredient}*//>
              </DndProvider>
          )}
            {/*</>*/}
          {/*)}*/}
        </main>
      </div>
    </>
  )
};

export default App
