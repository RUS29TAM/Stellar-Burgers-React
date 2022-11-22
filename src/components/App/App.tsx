import React from 'react';
import {AppHeader} from '../AppHeader/AppHeader';
import appStyle from './App.module.css';
import {BurgerIngredients} from "../BurgerIngredients/BurgerIngredients";
import {BurgerConstructor} from "../BurgerConstructor/BurgerConstructor";

export const App = () => {
    return (
        <>
            <main className={`page ${appStyle.page}`}>
                <AppHeader/>
                <div className={`appContainer ${appStyle.main}`}>
                    <BurgerIngredients/>
                    <BurgerConstructor/>
                </div>
            </main>
        </>
    )
};

