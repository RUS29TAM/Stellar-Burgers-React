import {AppSelector} from "./app-selector";

function useAuthorisation() {
    const user = AppSelector((state) => state.userReducer)

    return {name: user.name, email: user.email, isAuth: !!user.email, accept: user.accept, error: user.error}
}

export default useAuthorisation;
