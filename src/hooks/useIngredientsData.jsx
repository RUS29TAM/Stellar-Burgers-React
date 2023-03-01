import {useSelector} from "react-redux";
import {useCallback, useMemo} from "react";
import {ingredientsSelectorModified} from "../services/selectors/ingredientsSelectors";

export const useIngredientsData = () => {
  const ingredients = useSelector(ingredientsSelectorModified)

  const listIngredientsData = useMemo(() => {
    const ingredientsData = {}
    ingredients.forEach(ingredient => ingredientsData[ingredient._id] = ingredient)
    return ingredientsData
  }, [ingredients])

  const getIngredientImage = useCallback(ingredientId => listIngredientsData[ingredientId].image, [listIngredientsData])
  const getIngredientPrice = useCallback(ingredientId => listIngredientsData[ingredientId].price, [listIngredientsData])
  const getIngredientData = useCallback(ingredientId => listIngredientsData[ingredientId], [listIngredientsData])
  const priceCalculationById = useCallback((ingredientsIdList) => ingredientsIdList.reduce((prev, ingredientId) => prev + getIngredientPrice(ingredientId), 0), [getIngredientPrice])

  return useMemo(() => ({
      listIngredientsData,
      getIngredientPrice,
      getIngredientImage,
      getIngredientData,
      priceCalculationById
    }),
    [priceCalculationById, getIngredientData, getIngredientImage, getIngredientPrice, listIngredientsData])
}
