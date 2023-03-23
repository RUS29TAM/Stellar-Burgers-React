import {useDispatch} from "react-redux";
import {TAppDispatch} from '../store/store'

export const AppDispatch = () => useDispatch<TAppDispatch>()
