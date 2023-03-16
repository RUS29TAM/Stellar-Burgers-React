import {TUserAction, userAction} from "../../types/TUser";

export const setUserAction = ({name, email}: {email: string, name: string}): userAction => ({type: TUserAction.SET_USER, payload: {name, email}})
export const resetUserAction = (): userAction => ({type: TUserAction.LOGOUT_USER})
export const userLoadingAction = (): userAction => ({type: TUserAction.USER_LOADING})
export const userAcceptAction = ({email, name}: {email: string, name: string}): userAction => ({type: TUserAction.USER_ACCEPT, payload: {email, name}})
export const userErrorAction = (errorMessage: string): userAction => ({type: TUserAction.USER_ERROR, payload: errorMessage})
