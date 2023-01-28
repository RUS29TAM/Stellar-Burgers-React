import {useSelector} from "react-redux";

function useAuthorisation() {
  const user = useSelector(state => state.useReducer)
}
