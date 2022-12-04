import React, {useState, useEffect} from 'react';
import AppHeader from '../AppHeader/AppHeader';
import appStyle from './App.module.css';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import Downloader from '../Downloader/Downloader'
import {api} from '../Api/Api';
import PreLoader from "../PreLoader/PreLoader";

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
          {ingredientsData.isLoading && <Downloader type='loading'/> && <PreLoader/>}
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
