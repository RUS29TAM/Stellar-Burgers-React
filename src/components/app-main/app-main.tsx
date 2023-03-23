import React from 'react';
import appStyle from "./app-main.module.css";
import Downloader from "../downloader/downloader";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import {Outlet} from "react-router-dom";
import {RootState} from "../../store/store";
import {AppSelector} from '../../hooks/app-selector'

const AppMain = () => {
    const {loading, error} = AppSelector((store:RootState) => store.ingredients);
    const ingredients = AppSelector((state:RootState) => state.ingredients)

    return (
        !ingredients.success
            ?
            <Downloader type='loading'/>
            :
            <div className={`${appStyle.page}`}>
                <main className={`${appStyle.main}`}>
                    {loading && <Downloader type='loading'/>}
                    {error && <Downloader type='error'/>}
                    {(!loading && !error) && (
                        <DndProvider backend={HTML5Backend}>
                            <BurgerIngredients ingredients={[]}/>
                            <BurgerConstructor/>
                        </DndProvider>
                    )}
                    <Outlet/>
                </main>
            </div>
    );
};

export default AppMain;
