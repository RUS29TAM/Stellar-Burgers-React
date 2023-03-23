import {TUser, TUserAction} from "../../types/TUser";
import {IUserReducer} from '../../interfaces/data/IUserReducer'

const initialState: IUserReducer = {
    name: null,
    email: null,
    accept: false,
    loading: false,
    error: false,
    errorMessage: null,
}

export const userReducer = (state = initialState, action: TUserAction): IUserReducer => {
    switch (action.type) {

        case TUser.SET_USER:
            return {
                name: action.payload.name,
                email: action.payload.email,
                accept: true,
                loading: false,
                errorMessage: null,
                error: false
            }

        case TUser.USER_LOADING:
            return {
                name: null,
                email: null,
                loading: true,
                accept: false,
                error: false,
                errorMessage: null
            }

        case TUser.USER_ACCEPT:
            return {
                name: action.payload.name,
                email: action.payload.email,
                loading: false,
                accept: true,
                error: false,
                errorMessage: null
            }

        case TUser.USER_ERROR:
            return {
                name: null,
                email: null,
                loading: false,
                accept: false,
                error: true,
                errorMessage: action.payload
            }

        case TUser.LOGOUT_USER:
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

