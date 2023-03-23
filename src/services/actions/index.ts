import {TBurgerConstructorActions} from "../../types/t-burger-constructor";
import {TIngredientsAction} from "../../types/t-ingredient";
import {TUserAction} from "../../types/t-user";
import {TwsOrdersFeedsActions} from "../../types/t-ws-orders-feeds";
import {TwsUserOrdersActions} from "../../types/t-ws-user-orders";
import {TOrderActions} from "../../types/t-order";

export type AppActions = TBurgerConstructorActions | TIngredientsAction | TOrderActions | TUserAction | TwsOrdersFeedsActions | TwsUserOrdersActions
