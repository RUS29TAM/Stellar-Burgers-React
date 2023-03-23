import {TUser} from "../../types/t-user";

export interface ISetUserAction {
    type: TUser.SET_USER;
    payload: { email: string, name: string };
}

export interface IResetUserAction {
    type: TUser.LOGOUT_USER;
}

export interface IUserLoadingAction {
    type: TUser.USER_LOADING;
}

export interface IUserAcceptAction {
    type: TUser.USER_ACCEPT;
    payload: { email: string, name: string }
}

export interface IUserErrorAction {
    type: TUser.USER_ERROR;
    payload: string;
}
