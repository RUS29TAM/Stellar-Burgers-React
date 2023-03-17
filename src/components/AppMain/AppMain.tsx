import React from 'react';
import appStyle from "./AppMain.module.css";
import Downloader from "../Downloader/Downloader";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import {Outlet} from "react-router-dom";
import {RootState} from "../../store/store";
import {AppSelector} from '../../hooks/appSelector'

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
                            <BurgerIngredients />
                            <BurgerConstructor/>
                        </DndProvider>
                    )}
                    <Outlet/>
                </main>
            </div>
    );
};

export default AppMain;
