import React, {useEffect,} from 'react';
import IngredientDetails from "../../components/IngredientDetails/IngredientDetails";
import {useLocation, useParams} from "react-router-dom";
import api from "../../components/Api/Api";
import PageMain from "../PageMain/PageMain";
import {useDispatch, useSelector} from "react-redux";
import {SET_INGREDIENT} from "../../services/actions/ingredientDetails";

const PageIngredientsId = () => {
  const location = useLocation()
  const {id} = useParams()
  const dispatch = useDispatch()
  const ingredient = useSelector(state => state.ingredientDetails.ingredient)

  useEffect(() => {
    if (location.state?.from !== '/') {
      api.getIngredients()
        .then(ingredients => {
          const ingredient = ingredients.data.filter(ingredient => ingredient._id === id)[0]
          dispatch({type: SET_INGREDIENT, payload: ingredient})
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
        <IngredientDetails/>
        :
        'loading...'
  );
};

export default PageIngredientsId;
