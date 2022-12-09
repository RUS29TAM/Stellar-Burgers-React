import React, {useState, useEffect} from 'react';
import AppHeader from '../app-header/app-header';
import appStyle from './app.module.css';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import Downloader from '../downloader/downloader'
import {api} from '../api/api';
import Preloader from "../preloader/preloader";

const App = () => {
  const [ingredientsData, setIngredientsData] = useState({
    ingredient: [],
    isLoading: false,
    isError: false,
  });

  const mustDisplayContent = !ingredientsData.isLoading && !ingredientsData.isError && ingredientsData.ingredient.length > 0;
  useEffect(() => {
    setIngredientsData((prevState) => ({...prevState, isLoading: true,}));
    api.getIngredients()
      .then(data => setIngredientsData((prevState) => ({...prevState, isLoading: false, ingredient: data.data,})))
      .catch(error => setIngredientsData((prevState) => ({...prevState, isError: true, isLoading: false,})))
  }, []);

  return (
    <>
      <AppHeader/>
      <div className={`${appStyle.page}`}>
        <main className={`${appStyle.main}`}>
          {ingredientsData.isLoading && <Downloader type='loading'/> && <Preloader/>}
          {ingredientsData.isError && <Downloader type='error'/>}
          {mustDisplayContent && (
            <>
              <BurgerIngredients ingredients={ingredientsData.ingredient}/>
              <BurgerConstructor ingredients={ingredientsData.ingredient}/>
            </>
          )}
        </main>
      </div>
    </>
  )
};

export default App
