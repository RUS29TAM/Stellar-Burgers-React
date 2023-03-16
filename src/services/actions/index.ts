import {IBurgerConstructorActions} from "../../types/TBurgerConstructor";
import {TIngredientsAction} from "../../types/TIngredients";
import {TUserAction} from "../../types/TUser";
import {TwsOrdersFeedsActions} from "../../types/TwsOrdersFeeds";
import {TwsUserOrdersActions} from "../../types/TwsUserOrders";
import {TOrderActions} from "../../interfaces/IOrder";

export type AppActions = IBurgerConstructorActions | TIngredientsAction | TOrderActions | TUserAction | TwsOrdersFeedsActions | TwsUserOrdersActions
