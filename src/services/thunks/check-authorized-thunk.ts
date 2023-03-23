import useUserController from "../../hooks/use-user-controller";
import {userAcceptAction, userErrorAction, userLoadingAction} from "../actions/user-action";
import {TAppThunk} from "../../types/t-app-thunk";
import {TUserAction} from "../../types/t-user";

export const checkAuthorizedThunk = (): TAppThunk<TUserAction> => (dispatch) => {
    const userController = useUserController()
    dispatch(userLoadingAction())
    userController.checkAuth()
        .then(user => dispatch(userAcceptAction(user)))
        .catch(error => dispatch(userErrorAction(error.message)))
}
