import api from "../components/Api/Api";
import useToken from "./useToken";

const useUserController = () => {
  const token = useToken()

  const recoveryToken = () => api.updateToken(token.getRecovery())
    .then(data => {
      const {user, accessToken, refreshToken} = data
      token.setRecoveryToken(refreshToken)
      token.setToken(accessToken)
      return user
    })
    .catch((error) => {
      token.setToken(null)
      token.setRecoveryToken(null)
      return Promise.reject(error)
    })

  const elapsedToken = (error) => error
    .then(error => error.message.includes('jwt expires')
      ?
      recoveryToken()
      :
      Promise.reject(error))

  const getUser = () => api.getUser(token.getToken())
    .then(data => data.user)
    .catch((error) => elapsedToken(error).then(() => getUser()))


  const checkAuth = () => getUser()

  const login = (email, password) => api.login(email, password)
    .then(data => {
      const {user, accessToken, refreshToken} = data
      token.setRecoveryToken(refreshToken)
      token.setToken(accessToken)
      return user
    })

  const logOut = () => api.logOut(token.getRecovery())
    .then(() => {
      token.setToken(null)
      token.setRecoveryToken(null)
      return null
    })

  const registration = (name, email, password) => api.registrationUser(name, email, password)
    .then(data => {
      const {user, accessToken, refreshToken} = data
      token.setRecoveryToken(refreshToken)
      token.setToken(accessToken)
      return user
    })

  const resetPassword = (email) => api.resetPassword(email)
  const resetPasswordAgree = (password, code) => api.resetPasswordAgree(password, code)

  const updateProfileInfo = (name, email, password) => {
    const userInfo = {name, email}
    // eslint-disable-next-line no-unused-expressions
    password !== ''
      ?
      userInfo.password = password
      :
      false

    return api.updateUserInfo(userInfo, token.getToken()).then(data => data.user)
      .catch((error) => elapsedToken(error).then(() => updateProfileInfo(name, email, password)))
  }

  return {checkAuth, login, logOut, registration, resetPassword, resetPasswordAgree, getUser, updateProfileInfo}
}

export default useUserController;






