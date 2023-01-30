export const SET_USER = 'SET_USER'
export const LOGOUT_USER = 'LOGOUT_USER'
export const setUserAction = ({name, email}) => ({type: SET_USER, payload: {name, email}})
export const resetUserAction = () => ({type: LOGOUT_USER})
