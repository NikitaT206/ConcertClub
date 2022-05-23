import { URL } from './constants'

function checkReponse(res) {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err))
}

export async function fetchUsers() {
  const res = await fetch(URL + 'users')
  return checkReponse(res)
}

export async function fetchPosts(userId) {
  const res = await fetch(URL + `posts?userId=${userId}`)
  return checkReponse(res)
}

export async function fetchComments(postId) {
  const res = await fetch(URL + `posts/${postId}/comments`)
  return checkReponse(res)
}

export async function postComment(postId, data) {
  const res = await fetch(URL + `posts/${postId}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
      body: data.body,
      postId: postId
    })
  })
  return checkReponse(res)
}