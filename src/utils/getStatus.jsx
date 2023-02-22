export const getStatus = (status) => {
  switch (status) {
    case "created":
      return 'Создан'

    case "pending":
      return 'Готовится'

    case "done":
      return 'Выполнен'

    default:
      return "done"
  }
}

export const getDate = (date) => {
  let DAY;
  const orderDate = new Date(Date.parse(date))
  const timeZone = -orderDate.getTimezoneOffset() / 60
  const currentDay = new Date().getDate()

  switch (orderDate.getDate()){
    case currentDay:
      DAY = "Сегодня"
      break

    case currentDay -1:
      DAY = "Вчера"
      break

    case currentDay -2:
      DAY = "2 дня назад"
      break

    default:
      DAY = orderDate.toLocaleDateString("ru-RU",{weekday: "long",day: "numeric"}).toString()
      break
  }

  return `${DAY}, ${orderDate.toLocaleTimeString("ru-RU",{hour:"numeric",minute:"numeric"})} i-GMT${timeZone > 0 && "+"}${timeZone}`
}
