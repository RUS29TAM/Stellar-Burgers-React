import {
    IResetUserAction,
    ISetUserAction,
    IUserAcceptAction,
    IUserErrorAction,
    IUserLoadingAction
} from "../interfaces/data/IUser";

export enum TUser {
    SET_USER = 'SET_USER',
    LOGOUT_USER = 'LOGOUT_USER',
    USER_LOADING = 'USER_LOADING',
    USER_ACCEPT = 'USER_ACCEPT',
    USER_ERROR = 'USER_ERROR',
}

export type TUserAction = ISetUserAction
    | IResetUserAction
    | IUserLoadingAction
    | IUserAcceptAction
    | IUserErrorAction
