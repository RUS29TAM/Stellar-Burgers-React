import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {SET_INGREDIENT} from "../../services/actions/ingredientDetailsAction";
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import {useNavigate} from "react-router-dom";


const ModalIngredientsDetails = ({ingredientDetails}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const ingredient = useSelector(state => state.ingredientDetails.ingredient)

    useEffect(() => {
        dispatch({type: SET_INGREDIENT, payload: ingredientDetails})
    }, [])

    return (
        <>
            {ingredient && <Modal setOpen={() => navigate(-1)}><IngredientDetails/></Modal>}
        </>
    );
};

export default ModalIngredientsDetails;
