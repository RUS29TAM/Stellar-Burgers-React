const API_URL = 'https://norma.nomoreparties.space/api'; // - базовый url

const CONFIG = {
  ingredientsUrl: `${API_URL}/ingredients`, // - эндпоинт для получения ингредиентов.
  orderUrl: `${API_URL}/orders`,            // - эндпоинт для получения заказа.
  regUser: `${API_URL}/auth/register`,      // - эндпоинт для авторизации.
  logIn: `${API_URL}/auth/login`,           // - эндпоинт для регистрации пользователя.
  logOut: `${API_URL}/auth/logout`,         // - эндпоинт для выхода из системы.
  tokenRefresh: `${API_URL}/auth/token`,    // - эндпоинт обновления токена
}

const checkResponce = res => res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`)

const api = {
  getIngredients: () => fetch(CONFIG.ingredientsUrl).then(checkResponce),
  createOrder: (ingredientsID) => {
    const requestBody = {
      ingredients: ingredientsID,
    };
    const requestParams = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    };
    return fetch(CONFIG.orderUrl, requestParams).then(checkResponce)
  }
};

export default api
