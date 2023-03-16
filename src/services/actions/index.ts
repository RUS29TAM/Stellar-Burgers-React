import {IBurgerConstructorActions} from "../../types/TBurgerConstructor";
import {TIngredientsAction} from "../../types/TIngredients";
import {userAction} from "../../types/TUser";
import {TwsOrdersFeedsActions} from "../../types/TwsOrdersFeeds";
import {TwsUserOrdersActions} from "../../types/TwsUserOrders";
import {TOrderActions} from "../../interfaces/IOrder";

export type AppActions = IBurgerConstructorActions | TIngredientsAction | TOrderActions | userAction | TwsOrdersFeedsActions | TwsUserOrdersActions
