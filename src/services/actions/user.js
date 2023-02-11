export const SET_USER = 'SET_USER'
export const LOGOUT_USER = 'LOGOUT_USER'
export  const USER_LOADING = 'USER_LOADING'
export const USER_ACCEPT = 'USER_ACCEPT'
export const USER_ERROR = 'USER_ERROR'
export const setUserAction = ({name, email}) => ({type: SET_USER, payload: {name, email}})
export const resetUserAction = () => ({type: LOGOUT_USER})
export const userLoadingAction = () => ({type: USER_LOADING})
export const userAcceptAction = ({email,name}) => ({type: USER_ACCEPT, payload: {email, name}})
export const userErrorAction = (errorMessage) => ({type: USER_ERROR, payload: errorMessage})
