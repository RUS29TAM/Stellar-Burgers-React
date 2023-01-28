// @ts-ignore

const API_URL = 'https://norma.nomoreparties.space/api'; // - базовый url

const CONFIG = {
  ingredientsUrl: `${API_URL}/ingredients`,                 // - эндпоинт для получения ингредиентов.
  orderUrl: `${API_URL}/orders`,                            // - эндпоинт для получения заказа.
  regUser: `${API_URL}/auth/register`,                      // - эндпоинт для авторизации.
  logIn: `${API_URL}/auth/login`,                           // - эндпоинт для регистрации пользователя.
  logOut: `${API_URL}/auth/logout`,                         // - эндпоинт для выхода из системы.
  tokenRefresh: `${API_URL}/auth/token`,                    // - эндпоинт обновления токена
  updateUser: `${API_URL}/auth/user`,                       // - эндпоинт обновления пользователя
  passwordReset: `${API_URL}/password-reset`,               // - эндпоинт сброса пароля
  resetPasswordAccept: `${API_URL}/password-reset/reset`    // - эндпоинт подтверждения сброса пароля
}

const checkResponce = res => res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`)

function createRequest(endpoint, method, body = null, auth = null) {
  const settings = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    }
  }
  // eslint-disable-next-line no-unused-expressions
  auth ? settings.headers.Authorisation = auth : false
  // eslint-disable-next-line no-unused-expressions
  body ? settings.body = JSON.stringify(body) : false
  return fetch(endpoint, settings).then(checkResponce)
}

const api = {
  getIngredients: () => createRequest(CONFIG.ingredientsUrl, "GET"),
  createOrder: (ingredientsID) => createRequest(CONFIG.orderUrl, {ingredients: ingredientsID}, "POST"),
  registrationUser: (name, email, password) => createRequest(CONFIG.regUser, {name, email, password}, "POST"),
  updateUserInfo: (userInfo, token) => createRequest(CONFIG.updateUser, userInfo, token, "PATCH"),
  resetPassword: (email) => createRequest(CONFIG.passwordReset, {email}, "POST"),
  resetPasswordAgree: (password, link) => createRequest(CONFIG.resetPasswordAccept, {password, token: link}),
  logOut: (recovery) => createRequest(CONFIG.logOut, {token: recovery}, "POST"),
  login: (email, password) => createRequest(CONFIG.logIn, {email, password}, "POST"),
  getUser: (token) => createRequest(CONFIG.updateUser, null,token, "GET"),
  updateToken: (recovery) => createRequest(CONFIG.tokenRefresh, {token: recovery}, "POST")
};

// const api = {
//   getIngredients: () => fetch(CONFIG.ingredientsUrl).then(checkResponce),
//   createOrder: (ingredientsID) => {
//     const requestBody = {
//       ingredients: ingredientsID,
//     };
//     const requestParams = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(requestBody),
//     };
//     return fetch(CONFIG.orderUrl, requestParams).then(checkResponce)
//   }
// };

export default api
