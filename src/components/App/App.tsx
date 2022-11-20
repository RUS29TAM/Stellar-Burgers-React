import React from 'react';
import {AppHeader} from '../AppHeader/AppHeader';
import appStyle from './App.module.css';
import {BurgerIngredients} from "../BurgerIngredients/ BurgerIngredients";

export const App = () => {
    return (
        <>
        <AppHeader/>
    <main className={`appContainer ${appStyle.main}`}>
        <BurgerIngredients />
    </main>
    </>
    )
};

