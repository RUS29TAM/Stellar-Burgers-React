import {IBurgerConstructorActions} from "../../types/TBurgerConstructor";
import {TIngredientsAction} from "../../types/TIngredients";
import {userAction} from "../../types/TUser";
import {wsOrdersFeedsActions} from "../../types/TwsOrdersFeeds";
import {wsUserOrdersActions} from "../../types/TwsUserOrders";
import {TOrderActions} from "../../interfaces/IOrder";

export type AppActions = IBurgerConstructorActions | TIngredientsAction | TOrderActions | userAction | wsOrdersFeedsActions | wsUserOrdersActions
