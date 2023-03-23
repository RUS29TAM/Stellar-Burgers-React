import React, {FC, useEffect} from 'react';
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import {useNavigate} from "react-router-dom";
import {AppDispatch} from "../../hooks/appDispatch";
import {TIngredientDetails} from "../../types/TIngredientDetails";
import {AppSelector} from "../../hooks/appSelector";
import {RootState} from "../../store/store";
import {IIngredients} from "../../interfaces/data/IIngredients";

interface IModalIngredientsDetails {
    ingredientDetails: IIngredients
}
const ModalIngredientsDetails: FC<IModalIngredientsDetails> = ({ingredientDetails}) => {
    const dispatch = AppDispatch()
    const navigate = useNavigate()
    const ingredient = AppSelector((state: RootState) => state.ingredientDetails.ingredient)

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
