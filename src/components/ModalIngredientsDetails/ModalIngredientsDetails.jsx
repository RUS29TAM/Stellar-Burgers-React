import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {SET_INGREDIENT} from "../../services/actions/ingredientDetailsAction";
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import {useNavigate} from "react-router-dom";
import {AppDispatch} from "../../hooks/appDispatch";


const ModalIngredientsDetails = ({ingredientDetails}) => {
    const dispatch = AppDispatch()
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
