import {TBurgerConstructorActions} from "../../types/TBurgerConstructor";
import {TIngredientsAction} from "../../types/TIngredient";
import {TUserAction} from "../../types/TUser";
import {TwsOrdersFeedsActions} from "../../types/TwsOrdersFeeds";
import {TwsUserOrdersActions} from "../../types/TwsUserOrders";
import {TOrderActions} from "../../types/TOrder";

export type AppActions = TBurgerConstructorActions | TIngredientsAction | TOrderActions | TUserAction | TwsOrdersFeedsActions | TwsUserOrdersActions
