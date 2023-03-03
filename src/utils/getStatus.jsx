import styles from "./getStatus.module.css";

export const getStatus = (status) => {
    switch (status) {
        case "created":
            return <>
                <span className={`${styles.spanCreated}`}>С</span>
                <span className={`${styles.spanCreated}`}>О</span>
                <span className={`${styles.spanCreated}`}>З</span>
                <span className={`${styles.spanCreated}`}>Д</span>
                <span className={`${styles.spanCreated}`}>А</span>
                <span className={`${styles.spanCreated}`}>Н</span>
            </>


        case "pending":
            return <>
                <span className={`${styles.spanPending}`}>Г</span>
                <span className={`${styles.spanPending}`}>О</span>
                <span className={`${styles.spanPending}`}>Т</span>
                <span className={`${styles.spanPending}`}>О</span>
                <span className={`${styles.spanPending}`}>В</span>
                <span className={`${styles.spanPending}`}>И</span>
                <span className={`${styles.spanPending}`}>Т</span>
                <span className={`${styles.spanPending}`}>С</span>
                <span className={`${styles.spanPending}`}>Я</span>
            </>


        case "done":
            return <>
                <span className={`${styles.spanDone}`}>В</span>
                <span className={`${styles.spanDone}`}>Ы</span>
                <span className={`${styles.spanDone}`}>П</span>
                <span className={`${styles.spanDone}`}>О</span>
                <span className={`${styles.spanDone}`}>Л</span>
                <span className={`${styles.spanDone}`}>Н</span>
                <span className={`${styles.spanDone}`}>Е</span>
                <span className={`${styles.spanDone}`}>Н</span>
            </>

        default:
            return "done"
    }
}

export const getDate = (date) => {
    let DAY;
    const orderDate = new Date(Date.parse(date))
    const timeZone = -orderDate.getTimezoneOffset() / 60
    const currentDay = new Date().getDate()

    switch (orderDate.getDate()) {
        case currentDay:
            DAY = "Сегодня"
            break

        case currentDay - 1:
            DAY = "Вчера"
            break

        case currentDay - 2:
            DAY = "2 дня назад"
            break

        default:
            DAY = orderDate.toLocaleDateString("ru-RU", {weekday: "long", day: "numeric"}).toString()
            break
    }

    return `${DAY}, ${orderDate.toLocaleTimeString("ru-RU", {
        hour: "numeric",
        minute: "numeric"
    })} i-GMT${timeZone > 0 && "+"}${timeZone}`
}
