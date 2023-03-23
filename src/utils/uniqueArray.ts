const uniqueArray = <T = any[]> (arr: T[]) => {
    return arr.reduce((acc: T[], item) => {
        if (!acc.includes(item))
            acc.push(item)
        return acc
    }, [])
}
export default uniqueArray
