import useUserController from "../../hooks/useUserController";
import {userAcceptAction, userErrorAction, userLoadingAction} from "../actions/userAction";

export const checkAuthorizedThunk = () => (dispatch) => {
    const userController = useUserController()
    dispatch(userLoadingAction())
    userController.checkAuth()
        .then(user => dispatch(userAcceptAction(user)))
        .catch(error => dispatch(userErrorAction(error.message)))
}
