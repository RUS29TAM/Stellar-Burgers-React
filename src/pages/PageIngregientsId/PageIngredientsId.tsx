import React, {useEffect,} from 'react';
import IngredientDetails from "../../components/IngredientDetails/IngredientDetails";
import {useLocation, useParams} from "react-router-dom";
import api from "../../Api/Api";
import PageMain from "../PageMain/PageMain";
import PreLoader from "../../components/PreLoader/PreLoader";
import {TIngredientDetails} from "../../types/TIngredientDetails";
import {AppDispatch} from "../../hooks/appDispatch";
import {AppSelector} from "../../hooks/appSelector";
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
                    // @ts-ignore
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
