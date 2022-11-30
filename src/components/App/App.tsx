import React, {useState, useEffect} from 'react';
import {AppHeader} from '../AppHeader/AppHeader';
import appStyle from './App.module.css';
import {BurgerIngredients} from '../BurgerIngredients/BurgerIngredients';
import {BurgerConstructor} from '../BurgerConstructor/BurgerConstructor';
import {Downloader} from '../Downloader/Downloader'
import {CONFIG} from '../Api/Api';

export const App = () => {
  const [ingredientsData, setIngredientsData] = useState({
    ingredient: [],
    isLoading: false,
    isError: false,
  });

  const mustDisplayContent = !ingredientsData.isLoading && !ingredientsData.isError && ingredientsData.ingredient.length > 0;
  useEffect(() => {
    const getIngredientsData = async () => {
      setIngredientsData((prevState) => ({
        ...prevState, isLoading: true,
      }));
      try {
        const resp = await fetch(CONFIG.baseUrl);
        const data = await resp.json();
        setIngredientsData((prevState) => ({
          ...prevState, isLoading: false, ingredient: data.data,
        }));
      } catch {
        setIngredientsData((prevState) => ({
          ...prevState, isError: true, isLoading: false,
        }));
      }
    }
    getIngredientsData().then(resp => {
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <AppHeader/>
      <div className={`${appStyle.page}`}>
        <main className={`${appStyle.main}`}>
          {ingredientsData.isLoading && <Downloader type='loading'/>}
          {ingredientsData.isError && <Downloader type='error'/>}
          {mustDisplayContent && (
            <>
              <BurgerIngredients />
              <BurgerConstructor ingredients={ingredientsData.ingredient}/>
            </>
          )}
        </main>
      </div>
    </>
  )
};

