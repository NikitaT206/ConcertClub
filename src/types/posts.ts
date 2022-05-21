import { Key } from 'react'

export interface UserPost {
  userId: Number,
  id: Key,
  title: String,
  body: String,
}

export interface PostsState {
  posts: UserPost[],
  userPosts: UserPost[],
  userPublications: UserPost[],
  post: UserPost | null,
}

export enum PostsActionTypes {
  GET_POSTS = 'GET_POSTS',
  SET_USER_POSTS  = 'SET_USER_POSTS',
  SET_USER_PUBLICATIONS = 'SHOW_ALL_USER_POSTS',
  SET_POST = 'SET_POST',
}

interface PostsGetPostsAction {
  type: PostsActionTypes.GET_POSTS,
  payload: UserPost[]
}

interface PostsSetUserPostsAction {
  type: PostsActionTypes.SET_USER_POSTS,
  payload: UserPost[]
}

interface PostsSetUserPublicationsAction {
  type: PostsActionTypes.SET_USER_PUBLICATIONS,
  payload: UserPost[]
}

interface PostsSetPostAction {
  type: PostsActionTypes.SET_POST,
  payload: UserPost
}

export type PostsActions = PostsGetPostsAction | PostsSetPostAction | PostsSetUserPostsAction | PostsSetUserPublicationsAction