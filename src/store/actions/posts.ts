import { Dispatch } from 'redux'
import { UserPost, PostsActionTypes, PostsActions } from '../../types/posts'
import { fetchPosts } from '../../utils/api'

export function getPosts(userId: Number | undefined) {
  return async (dispatch: Dispatch<PostsActions>) => {
    try {
      const data = await fetchPosts(userId)
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

export function erasePosts() {
  return (dispatch: Dispatch<PostsActions>) => {
    dispatch({type: PostsActionTypes.ERASE_POSTS})
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