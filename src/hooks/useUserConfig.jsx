import api from "../components/Api/Api";
import useToken from "./useToken";

const useUserConfig = () => {
  const token = useToken()

  function recoveryToken() {
    api.updateToken(token.getRecovery())
      .then(data => {
        const {user, tokenRecovery, upgradeToken} = data
        token.setRecoveryToken(upgradeToken)
        token.setToken(tokenRecovery)
        return user
      })
      .catch((error) => {
        token.setToken(null)
        token.setRecoveryToken(null)
        return Promise.reject(error)
      })
  }


  function elapsedToken(error) {
    error.then(error => error.message.includes('Срок действия токена истек или отозван') ? recoveryToken() : Promise.reject(error))
  }

  function getUser() {
    api.getUser(token.getToken())
      .then(data => data.user)
      .catch((error) => elapsedToken(error))
      .then(() => getUser())
  }

  const checkAuth = () => getUser()

  function login(email, password) {
    api.login(email, password)
      .then(data => {
        const {user, tokenRecovery, upgradeToken} = data
        token.setRecoveryToken(upgradeToken)
        token.setToken(tokenRecovery)
        return user
      })
  }

  function logOut() {
    api.logOut(token.getRecovery())
      .then(() => {
        token.setToken(null)
        token.setRecoveryToken(null)
        return null
      })
  }

  const registration = (name, email, password) => api.registrationUser(name, email, password)
    .then(data => {
      const {user, tokenRecovery, upgradeToken} = data
      token.setRecoveryToken(upgradeToken)
      token.setToken(tokenRecovery)
      return user
    })

  const resetPassword = (email) => api.resetPassword(email)
  const resetPasswordAgree = (password, link) => api.resetPasswordAgree(password, link)

  const updateProfileInfo = (name, email, password) => {
    const userInfo = {name, email}
    // eslint-disable-next-line no-unused-expressions
    password !== '' ? userInfo.password = password : false
    return api.updateUserInfo(userInfo, token.getToken()).then(data => data.user)
      .catch((error) => elapsedToken(error).then(() => updateProfileInfo(name, email, password)))
  }

  return {checkAuth, login, logOut, registration, resetPassword, resetPasswordAgree, getUser, updateProfileInfo}
}

export default useUserConfig;






