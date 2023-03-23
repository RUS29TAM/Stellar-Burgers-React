import useUserController from "../../hooks/useUserController";
import {userAcceptAction, userErrorAction, userLoadingAction} from "../actions/userAction";
import {TAppThunk} from "../../types/TAppThunk";
import {TUserAction} from "../../types/TUser";

export const checkAuthorizedThunk = (): TAppThunk<TUserAction> => (dispatch) => {
    const userController = useUserController()
    dispatch(userLoadingAction())
    userController.checkAuth()
        .then(user => dispatch(userAcceptAction(user)))
        .catch(error => dispatch(userErrorAction(error.message)))
}
