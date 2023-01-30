// @ts-ignore

const API_URL = 'https://norma.nomoreparties.space/api'; // - базовый url

const CONFIG = {
  ingredientsUrl: `${API_URL}/ingredients`,                 // - эндпоинт для получения ингредиентов.
  orderUrl: `${API_URL}/orders`,                            // - эндпоинт для получения заказа.
  regUser: `${API_URL}/auth/register`,                      // - эндпоинт для авторизации.
  logIn: `${API_URL}/auth/login`,                           // - эндпоинт для регистрации пользователя.
  logOut: `${API_URL}/auth/logout`,                         // - эндпоинт для выхода из системы.
  tokenRefresh: `${API_URL}/auth/token`,                    // - эндпоинт обновления токена
  getUserInfo: `${API_URL}/auth/user`,                      // - эндпоинт профиля пользователя
  updateUserInfo: `${API_URL}/auth/user`,                   // - эндпоинт обновления профиля пользователя
  passwordReset: `${API_URL}/password-reset`,               // - эндпоинт сброса пароля
  resetPasswordAccept: `${API_URL}/password-reset/reset`    // - эндпоинт подтверждения сброса пароля
}

const checkResponce = res => res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`)

const createRequest = (endpoint, method, body = null, auth = null)  => {
  const settings = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    }
  }
  // eslint-disable-next-line no-unused-expressions
  auth ? settings.headers.Authorization = auth : false

  // eslint-disable-next-line no-unused-expressions
  body ? settings.body = JSON.stringify(body) : false
  return fetch(endpoint, settings).then(checkResponce)
}


const api = {
  getIngredients: () => createRequest(CONFIG.ingredientsUrl, "GET"),
  createOrder: (ingredientsID) => createRequest(CONFIG.orderUrl, 'POST', {ingredients: ingredientsID}),
  registrationUser: (name, email, password) => createRequest(CONFIG.regUser, 'POST', {name, email, password}),
  updateUserInfo: (userInfo, token) => createRequest(CONFIG.updateUserInfo, "PATCH", userInfo, token),
  resetPassword: (email) => createRequest(CONFIG.passwordReset, 'POST', {email}),
  resetPasswordAgree: (password, code) => createRequest(CONFIG.resetPasswordAccept, 'POST', {password, token: code}),
  logOut: (recovery) => createRequest(CONFIG.logOut, 'POST', {token: recovery}),
  login: (email, password) => createRequest(CONFIG.logIn, 'POST', {email, password}),
  getUser: (token) => createRequest(CONFIG.getUserInfo, 'GET', null,token),
  updateToken: (recovery) => createRequest(CONFIG.tokenRefresh, 'POST', {token: recovery})
};

export default api
