import {TBurgerConstructor} from "../../types/burgerConstructor";
import {ingredientsAction} from "../../types/ingredients";
import {TOrder} from "../../types/order";
import {TUserAction} from "../../types/user";
import {TwsOrdersFeeds} from "../../types/wsOrdersFeeds";
import {TwsUserOrders} from "../../types/wsUserOrders";

export type AppActions = TBurgerConstructor | ingredientsAction | TOrder | TUserAction | TwsOrdersFeeds | TwsUserOrders
