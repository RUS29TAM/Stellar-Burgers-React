const CONFIG = {
  baseUrl: 'https://norma.nomoreparties.space/api/ingredients',
  orderUrl: 'https://norma.nomoreparties.space/api/orders'
}

const api = {
  getIngredients: () =>
    fetch(CONFIG.baseUrl).then((res) =>
      res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`)
    ),
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
    return fetch(CONFIG.orderUrl, requestParams)
      .then((res) => res.json())
  }
};

export default api
