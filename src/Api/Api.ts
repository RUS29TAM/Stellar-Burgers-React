import {IUserInfo} from "../interfaces/IUserInfo";
import {IUpdateUserInfoResp} from "../interfaces/IUpdateUserInfoResp";
import {IMethods} from "../interfaces/IMethods";

const API_URL = 'https://norma.nomoreparties.space/api';    // - базовый url
const WS_URL = 'wss://norma.nomoreparties.space';           //надстройка над протоколом для передачи зашифрованных сообщений

const CONFIG = {
    ingredientsUrl:      `${API_URL}/ingredients`,              // - эндпоинт для получения ингредиентов.
    orderUrl:            `${API_URL}/orders`,                   // - эндпоинт для получения заказа.
    regUser:             `${API_URL}/auth/register`,            // - эндпоинт для авторизации.
    logIn:               `${API_URL}/auth/login`,               // - эндпоинт для регистрации пользователя.
    logOut:              `${API_URL}/auth/logout`,              // - эндпоинт для выхода из системы.
    tokenRefresh:        `${API_URL}/auth/token`,               // - эндпоинт обновления токена
    getUserInfo:         `${API_URL}/auth/user`,                // - эндпоинт профиля пользователя
    updateUserInfo:      `${API_URL}/auth/user`,                // - эндпоинт обновления профиля пользователя
    passwordReset:       `${API_URL}/password-reset`,           // - эндпоинт сброса пароля
    resetPasswordAccept: `${API_URL}/password-reset/reset`      // - эндпоинт подтверждения сброса пароля
}

export const WS_CONFIG = {
    feedsUrl: `${WS_URL}/orders/all`,
    userUrl: (token: string) => `${WS_URL}/orders?token=${token}`,
}

const checkResponce = (res: Response) => res.ok ? res.json() : Promise.reject(res.json())

const createRequest = (endpoint: string, method: IMethods, body: null | any = null, auth: null | string = null) => {
    const settings: any = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        }
    }
    if (auth) {
        settings.headers.Authorization = auth
    }
    if (body) {
        settings.body = JSON.stringify(body)
    }
    return fetch(endpoint, settings).then(checkResponce)
}

const api = {
    getIngredients: () => createRequest(CONFIG.ingredientsUrl, IMethods.GET),
    createOrder: (ingredientsID: string[], token: string) => createRequest(CONFIG.orderUrl, IMethods.POST, {ingredients: ingredientsID}, token),
    registrationUser: (name: string, email: string, password: string) => createRequest(CONFIG.regUser, IMethods.POST, {name, email, password}),
    updateUserInfo: (userInfo: IUserInfo, token: string):Promise<IUpdateUserInfoResp> => createRequest(CONFIG.updateUserInfo, IMethods.PATCH, userInfo, token),
    resetPassword: (email: string) => createRequest(CONFIG.passwordReset, IMethods.POST, {email}),
    resetPasswordAgree: (password: string, code: string) => createRequest(CONFIG.resetPasswordAccept, IMethods.POST, {password, token: code}),
    logOut: (recovery: string) => createRequest(CONFIG.logOut, IMethods.POST, {token: recovery}),
    login: (email: string, password: string) => createRequest(CONFIG.logIn, IMethods.POST, {email, password}),
    getUser: (token: string) => createRequest(CONFIG.getUserInfo, IMethods.GET, null, token),
    updateToken: (recovery: string) => createRequest(CONFIG.tokenRefresh, IMethods.POST, {token: recovery})
};

export default api