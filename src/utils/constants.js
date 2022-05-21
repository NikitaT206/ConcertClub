export const URL = 'https://jsonplaceholder.typicode.com/'

const day = new Date().getDate()
const month = String(new Date().getMonth()).length > 1 ? new Date().getMonth() + 1 : '0' + (new Date().getMonth() + 1)
const year = String(new Date().getFullYear()).slice(2,4)

export const date = `${day}.${month}.${year}`