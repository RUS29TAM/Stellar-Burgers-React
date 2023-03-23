import {TUser, TUserAction} from "../../types/t-user";

export const setUserAction = ({name, email}: {email: string, name: string}): TUserAction => ({type: TUser.SET_USER, payload: {name, email}})
export const resetUserAction = (): TUserAction => ({type: TUser.LOGOUT_USER})
export const userLoadingAction = (): TUserAction => ({type: TUser.USER_LOADING})
export const userAcceptAction = ({email, name}: {email: string, name: string}): TUserAction => ({type: TUser.USER_ACCEPT, payload: {email, name}})
export const userErrorAction = (errorMessage: string): TUserAction => ({type: TUser.USER_ERROR, payload: errorMessage})
