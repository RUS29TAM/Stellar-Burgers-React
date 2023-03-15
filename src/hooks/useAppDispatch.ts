import {useDispatch} from "react-redux";
import {AppActions} from '../store/store'

export const useAppDispatch = () => useDispatch<AppDispatch>()
