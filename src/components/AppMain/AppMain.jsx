import React, {useEffect, useState} from 'react';
import appStyle from "./AppMain.module.css";
import Downloader from "../Downloader/Downloader";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import {useDispatch, useSelector} from "react-redux";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {SET_INGREDIENT} from "../../services/actions/ingredientDetailsAction";
import {ingredientsThunk} from "../../services/thunks/ingredientsThunk";

const AppMain = () => {
    const dispatch = useDispatch();
    const {loading, error} = useSelector((store) => store.ingredients);
    const ingredients = useSelector(state => state.ingredients)
    const location = useLocation()
    const [ingredientDetailsModalState, setIngredientDetailsModalState] = useState(false);
    const navigate = useNavigate()
    const handleIngredientSetOpen = value => {
        setIngredientDetailsModalState(value)
        navigate('/')
    }
    const ingredientDetails = useSelector(state => state.ingredientDetails.ingredient)

    useEffect(() => {
        if (location.state?.ingredient) {
            dispatch({type: SET_INGREDIENT, payload: location.state.ingredient})
            setIngredientDetailsModalState(true)
        }
    }, [location.state])

    useEffect(() => {
        dispatch(ingredientsThunk());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
                            <BurgerIngredients/>
                            <BurgerConstructor/>
                        </DndProvider>
                    )}
                    <Outlet/>
                </main>
            </div>
    );
};

export default AppMain;
