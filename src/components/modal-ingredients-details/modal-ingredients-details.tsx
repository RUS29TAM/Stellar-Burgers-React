import React, {FC, useEffect} from 'react';
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import {useNavigate} from "react-router-dom";
import {AppDispatch} from "../../hooks/app-dispatch";
import {TIngredientDetails} from "../../types/t-ingredient-details";
import {AppSelector} from "../../hooks/app-selector";
import {IIngredient} from "../../interfaces/data/i-ingredient";

interface IModalIngredientsDetails {
    ingredientDetails: IIngredient
}
const ModalIngredientsDetails: FC<IModalIngredientsDetails> = ({ingredientDetails}) => {
    const dispatch = AppDispatch()
    const navigate = useNavigate()
    const ingredient = AppSelector((state) => state.ingredientDetails.ingredient)

    useEffect(() => {

        dispatch({type: TIngredientDetails.SET_INGREDIENT, payload: ingredientDetails})
    }, [])

    return (
        <>
            {ingredient && <Modal setOpen={() => navigate(-1)}><IngredientDetails extraClass={''} isModal={true}/></Modal>}
        </>
    );
};

export default ModalIngredientsDetails;
