import api from "../api/api";
import useToken from "./use-token";
import {IUserInfo} from "../interfaces/data/i-user-info";

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

    const elapsedToken = (error: any) => error.then((error: { message: string | string[]; }) => {
        if (error.message.includes("jwt expired")) {
            return recoveryToken()
        }
        return Promise.reject(error)
    })


    const getUser = ():Promise<IUserInfo> => api.getUser(token.getToken())
        .then(data => data.user)
        .catch((error) => elapsedToken(error).then(() => getUser()))

    const checkAuth = () => getUser()

    const login = (email: string, password: string) => api.login(email, password)
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

    const registration = (name: string, email: string, password: string) => api.registrationUser(name, email, password)
        .then(data => {
            const {user, accessToken, refreshToken} = data
            token.setRecoveryToken(refreshToken)
            token.setToken(accessToken)
            return user
        })

    const resetPassword = (email: string) => api.resetPassword(email)

    const resetPasswordAgree = (password: string, code: string) => api.resetPasswordAgree(password, code)

    const updateProfileInfo = (email: string, password: string | null, name:string):Promise<IUserInfo> => {
        const userInfo: IUserInfo = {name, email}
        if (password) {
            userInfo.password = password
        }
        return api.updateUserInfo(userInfo, token.getToken()).then(data => data.user)
            .catch((error) => elapsedToken(error).then(() => updateProfileInfo(email, password, name)))
    }

    return {checkAuth, login, logOut, registration, resetPassword, resetPasswordAgree, getUser, updateProfileInfo}
}

export default useUserController;






