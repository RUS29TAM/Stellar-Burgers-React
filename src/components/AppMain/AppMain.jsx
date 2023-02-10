import React, {useEffect, useState} from 'react';
import appStyle from "../App/App.module.css";
import Downloader from "../Downloader/Downloader";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import {useDispatch, useSelector} from "react-redux";
import {getIngredients} from "../../services/actions/ingredients";
import {useLocation, useNavigate} from "react-router-dom";
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import {SET_INGREDIENT} from "../../services/actions/ingredientDetails";

const AppMain = () => {
  const dispatch = useDispatch();
  const {isLoading, isError} = useSelector((store) => store.ingredients);
  const ingredients = useSelector(state => state.ingredients)
  const location = useLocation()
  const [isIngredientDetailsPopupOpen, setIngredientDetailsPopupOpen] = useState(false);
  const navigate = useNavigate()
  const handleIngredientSetOpen = value => {
    setIngredientDetailsPopupOpen(value)
    navigate('/')
  }
  const ingredientDetails = useSelector(state => state.ingredientDetails.ingredient)

  useEffect(() => {
    if (location.state?.ingredient) {
      dispatch({type: SET_INGREDIENT, payload: location.state.ingredient})
      setIngredientDetailsPopupOpen(true)
    }
  }, [location.state])

  useEffect(() => {
    dispatch(getIngredients());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (!ingredients.isSuccess
      ?
      <Downloader type='loading'/>
      :
      <div className={`${appStyle.page}`}>
        <main className={`${appStyle.main}`}>
          {isLoading && <Downloader type='loading'/>}
          {isError && <Downloader type='error'/>}
          {(!isLoading && !isError) && (
            <DndProvider backend={HTML5Backend}>
              <BurgerIngredients/>
              <BurgerConstructor/>
            </DndProvider>
          )}
          (
        </main>
        ({isIngredientDetailsPopupOpen && ingredientDetails &&
        <Modal setOpen={handleIngredientSetOpen}>
          <IngredientDetails/>
        </Modal>
      })
      </div>
  );
};

export default AppMain;
