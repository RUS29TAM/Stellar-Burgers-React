import React, {useEffect, useState} from 'react';
import AppHeader from "../../components/AppHeader/AppHeader";
import IngredientDetails from "../../components/IngredientDetails/IngredientDetails";
import {useLocation, useParams} from "react-router-dom";
import api from "../../components/Api/Api";
import PageMain from "../PageMain/PageMain";

const PageIngredientsId = () => {
  const location = useLocation()
  const {id} = useParams()
  const [ingredient, setIngredient] = useState(null)

  useEffect(() => {
    if (location.state?.from !== '/') {
      api.getIngredients()
        .then(ingredients => {
          const ingredient = ingredients.data.filter(ingredient => ingredient._id === id)[0]
          setIngredient(ingredient)
        })
        .catch(error => console.log(error.message))
    }
  }, [id, location.state])

  return (location.state?.from !== '/' ? <PageMain/> : ingredient ?
        <>
          <AppHeader/>
          <IngredientDetails/>
        </> : ''
  );
};

export default PageIngredientsId;
