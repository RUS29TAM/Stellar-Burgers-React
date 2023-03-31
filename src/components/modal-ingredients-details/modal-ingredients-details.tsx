import React, {FC, useEffect} from 'react';
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import {useNavigate} from "react-router-dom";
import {AppDispatch} from "../../hooks/app-dispatch";
import {TIngredientDetails} from "../../types/t-ingredient-details";
import {AppSelector} from "../../hooks/app-selector";
import {RootState} from "../../store/store";
import {IIngredient} from "../../interfaces/data/i-ingredient";

interface IModalIngredientsDetails {
    ingredientDetails: IIngredient
}
const ModalIngredientsDetails: FC<IModalIngredientsDetails> = ({ingredientDetails}) => {
    const dispatch = AppDispatch()
    const navigate = useNavigate()
    const ingredient = AppSelector((state: RootState) => state.ingredientDetails.ingredient)

    useEffect(() => {
        // @ts-ignore
        dispatch({type: TIngredientDetails.SET_INGREDIENT, payload: ingredientDetails})
    }, [])

    return (
        <>
            {ingredient && <Modal setOpen={() => navigate(-1)}><IngredientDetails extraClass={''} isModal={true}/></Modal>}
        </>
    );
};

export default ModalIngredientsDetails;
