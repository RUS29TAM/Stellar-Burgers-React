import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import {useNavigate} from "react-router-dom";
import {AppDispatch} from "../../hooks/appDispatch";
import {TIngredientDetails} from "../../types/TIngredientDetails";


const ModalIngredientsDetails = ({ingredientDetails}) => {
    const dispatch = AppDispatch()
    const navigate = useNavigate()
    const ingredient = useSelector(state => state.ingredientDetails.ingredient)

    useEffect(() => {
        dispatch({type: TIngredientDetails.SET_INGREDIENT, payload: ingredientDetails})
    }, [])

    return (
        <>
            {ingredient && <Modal setOpen={() => navigate(-1)}><IngredientDetails/></Modal>}
        </>
    );
};

export default ModalIngredientsDetails;
