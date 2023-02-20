import {ingredientsSelectorReducerModified} from "../services/selectors/ingredientsSelectors";
import {useSelector} from "react-redux";
import {useCallback, useMemo} from "react";

export const useIngredientsCountData = (arrayToCalculateCount) => {
  const ingredients = useSelector(ingredientsSelectorReducerModified)

  const ingredientsCountData = useMemo(() => {
    const ingredientsCount = {}
    if (!ingredients.isSuccess) return ingredientsCount
    ingredients.ingredients.forEach((ingredient) => ingredientsCount[ingredient._id] = arrayToCalculateCount.filter(arrayItem => arrayItem._id === ingredient._id).length)
    return ingredientsCount
  }, [ingredients, arrayToCalculateCount])

  const getIngredientCount = useCallback ((ingredientId) => ingredientsCountData[ingredientId],[ingredientsCountData])

  return useMemo(() => ({ingredientsCountData,getIngredientCount}),[getIngredientCount, ingredientsCountData])
}
