import React from 'react';
import {AppHeader} from '../AppHeader/AppHeader';
import appStyle from './App.module.css';
import {BurgerIngredients} from '../BurgerIngredients/BurgerIngredients';
import {BurgerConstructor} from '../BurgerConstructor/BurgerConstructor';

export const App = () => {
    return (
        <>
            <AppHeader/>
            <div className={`${appStyle.page}`}>
                <main className={`${appStyle.main}`}>
                    <BurgerIngredients/>
                    <BurgerConstructor/>
                </main>
            </div>
        </>
    )
};

