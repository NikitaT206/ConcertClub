export const URL = 'https://jsonplaceholder.typicode.com/'

const day = new Date().getDate()
const month = String(new Date().getMonth()).length > 1 ? new Date().getMonth() + 1 : '0' + (new Date().getMonth() + 1)
const year = String(new Date().getFullYear()).slice(2,4)

export const date = `${day}.${month}.${year}`

export const slicePostsNumber = 3

export const userMe =  {
  "id": 1,
  "name": "Nikita Tunik",
  "username": "nikitat206",
  "email": "nikitatunik@inbox.ru",
  "address": {
    "street": "Murino",
    "suite": "Shuvalova",
    "city": "Saint-Petersburg",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "89244810988",
  "website": "https://github.com/NikitaT206",
  "company": {
    "name": "Company",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
}
