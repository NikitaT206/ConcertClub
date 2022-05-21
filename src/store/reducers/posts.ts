import { PostsState, PostsActions, PostsActionTypes } from '../../types/posts'

const defaultState: PostsState = {
  posts: [],
  userPosts: [],
  userPublications: [],
  post: null
}

export const postsReducer = (state = defaultState, action: PostsActions) => {
  switch(action.type) {
    case PostsActionTypes.GET_POSTS:
      return {...state, posts: action.payload}
    case PostsActionTypes.SET_USER_POSTS:
      return {...state, userPosts: action.payload}
    case PostsActionTypes.SET_USER_PUBLICATIONS:
      return {...state, userPublications: action.payload}
    case PostsActionTypes.SET_POST:
      return {...state, post: action.payload}
    default:
      return state
  }
}