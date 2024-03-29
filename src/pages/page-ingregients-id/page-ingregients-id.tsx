import React, {useEffect,} from 'react';
import IngredientDetails from "../../components/ingredient-details/ingredient-details";
import {useLocation, useParams} from "react-router-dom";
import api from "../../api/api";
import PageMain from "../page-main/page-main";
import PreLoader from "../../components/pre-loader/pre-loader";
import {TIngredientDetails} from "../../types/t-ingredient-details";
import {AppDispatch} from "../../hooks/app-dispatch";
import {AppSelector} from "../../hooks/app-selector";
import {RootState} from "../../store/store";

const PageIngredientsId = () => {
    const location = useLocation()
    const {id} = useParams()
    const dispatch = AppDispatch()
    const ingredient = AppSelector((state: RootState) => state.ingredientDetails.ingredient)

    useEffect(() => {
        if (location.state?.from !== '/') {
            api.getIngredients()
                .then(ingredients => {
                    const ingredient = ingredients.data.filter(ingredient => ingredient._id === id)[0]

                    dispatch({type: TIngredientDetails.SET_INGREDIENT, payload: ingredient})
                })
                .catch(error => console.log(error))
        }
    }, [id, location.state])

    return (location.state?.from === '/'
            ?
            <PageMain/>
            :
            ingredient !== null
                ?
                <IngredientDetails extraClass={'mt-30'} isModal={false}/>
                :
                <PreLoader/>
    );
};

export default PageIngredientsId;
