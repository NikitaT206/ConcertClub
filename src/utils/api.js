import { URL } from './constants'

function checkReponse(res) {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err))
}

export async function fetchUsers() {
  const res = await fetch(URL + 'users')
  return checkReponse(res)
}

export async function fetchPosts() {
  const res = await fetch(URL + 'posts')
  return checkReponse(res)
}

export async function fetchComments() {
  const res = await fetch(URL + 'comments')
  return checkReponse(res)
}