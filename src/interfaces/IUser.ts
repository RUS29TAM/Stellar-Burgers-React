import {TUserAction} from "../types/TUser";

export interface ISetUserAction {
    type: TUserAction.SET_USER;
    payload: { email: string, name: string };
}

export interface IResetUserAction {
    type: TUserAction.LOGOUT_USER;
}

export interface IUserLoadingAction {
    type: TUserAction.USER_LOADING;
}

export interface IUserAcceptAction {
    type: TUserAction.USER_ACCEPT;
    payload: { email: string, name: string }
}

export interface IUserErrorAction {
    type: TUserAction.USER_ERROR;
    payload: string;
}
