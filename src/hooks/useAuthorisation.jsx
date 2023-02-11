import {useSelector} from "react-redux";

function useAuthorisation() {
  const user = useSelector(state => state.userReducer)

  return {name: user.name, email: user.email, isAuth: !!user.email, accept: user.accept}
}

export default useAuthorisation;
