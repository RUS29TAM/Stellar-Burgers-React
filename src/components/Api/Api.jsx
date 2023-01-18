const API_URL = 'https://norma.nomoreparties.space/api';

const CONFIG = {
  ingredientsUrl: `${API_URL}/ingredients`,
  orderUrl: `${API_URL}/orders`,
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
