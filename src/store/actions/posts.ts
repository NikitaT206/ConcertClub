import { Dispatch } from 'redux'
import { UserPost, PostsActionTypes, PostsActions } from '../../types/posts'
import { fetchPosts } from '../../utils/api'

export function getPosts() {
  return async (dispatch: Dispatch<PostsActions>) => {
    try {
      const data = await fetchPosts()
      dispatch({ type: PostsActionTypes.GET_POSTS, payload: data })
    } catch (err) {
      return await Promise.reject(err)
    }
  }
}

export function setUserPosts(posts: UserPost[]) {
  return (dispatch: Dispatch<PostsActions>) => {
    dispatch({type: PostsActionTypes.SET_USER_POSTS, payload: posts})
  }
}

export function setUserPublications(posts: UserPost[]) {
  return (dispatch: Dispatch<PostsActions>) => {
    dispatch({type: PostsActionTypes.SET_USER_PUBLICATIONS, payload: posts})
  }
}

export function setPost(post: UserPost) {
  return (dispatch: Dispatch<PostsActions>) => {
    dispatch({type: PostsActionTypes.SET_POST, payload: post})
  }
}