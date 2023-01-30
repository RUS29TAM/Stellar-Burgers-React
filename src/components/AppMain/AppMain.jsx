import React, {useEffect, useState} from 'react';
import appStyle from "../App/App.module.css";
import Downloader from "../Downloader/Downloader";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import {useDispatch, useSelector} from "react-redux";
import {getIngredients} from "../../services/actions/ingredients";
import {useLocation} from "react-router-dom";
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";

const AppMain = () => {
  const dispatch = useDispatch();
  const {isLoading, isError} = useSelector((store) => store.ingredients);
  const ingredients = useSelector(state => state.ingredients)
  const location = useLocation()
  const [ingredientStateModal, setIngredientStateModal] = useState(!!location.state?.stateModal)
  const closeModalIngredient = () => {
    setIngredientStateModal(false)
    location.state.stateModal = false
  }

  useEffect(() => {
    dispatch(getIngredients());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (!ingredients.isSuccess ? <Downloader type='loading'/> :

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
        </main>
        {ingredientStateModal &&
          <Modal handleClose={closeModalIngredient}>
            <IngredientDetails ingredientDetails={location.state.ingredient}/>
          </Modal>
        }
      </div>
  )
    ;
};

export default AppMain;
