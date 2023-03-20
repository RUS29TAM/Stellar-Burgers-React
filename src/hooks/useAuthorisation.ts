import {AppSelector} from "./appSelector";
import {RootState} from "../store/store";

function useAuthorisation() {
    const user = AppSelector((state: RootState) => state.userReducer)

    return {name: user.name, email: user.email, isAuth: !!user.email, accept: user.accept, error: user.error}
}

export default useAuthorisation;
