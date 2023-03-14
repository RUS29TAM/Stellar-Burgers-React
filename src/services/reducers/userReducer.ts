import {TUserAction, userAction} from "../../types/user";
import {IUserReducer} from '../../interfaces/userReducer'

const initialState: IUserReducer = {
    name: null,
    email: null,
    accept: false,
    loading: false,
    error: false,
    errorMessage: null,
}

export const userReducer = (state = initialState, action: userAction): IUserReducer => {
    switch (action.type) {

        case TUserAction.SET_USER:
            return {
                name: action.payload.name,
                email: action.payload.email,
                accept: true,
                loading: false,
                errorMessage: null,
                error: false
            }

        case TUserAction.USER_LOADING:
            return {
                name: null,
                email: null,
                loading: true,
                accept: false,
                error: false,
                errorMessage: null
            }

        case TUserAction.USER_ACCEPT:
            return {
                name: action.payload.name,
                email: action.payload.email,
                loading: false,
                accept: true,
                error: false,
                errorMessage: null
            }

        case TUserAction.USER_ERROR:
            return {
                name: null,
                email: null,
                loading: false,
                accept: false,
                error: true,
                errorMessage: action.payload
            }

        case TUserAction.LOGOUT_USER:
            return {
                name: null,
                email: null,
                accept: false,
                loading: false,
                error: false,
                errorMessage: null
            }
        default:

            return state
    }
}

