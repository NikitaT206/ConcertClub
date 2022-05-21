import { Key } from 'react';

export interface PostComment {
  postId: Number,
  id: Key,
  name: String,
  email: String,
  body: String,
}

export interface Comments {
  comments: PostComment[],
  postComments: PostComment[],
  showCommentForm: Boolean,
}

export enum CommentsActionTypes {
  GET_COMMENTS = 'GET_COMMENTS',
  SET_POST_COMMENTS = 'SET_POST_COMMENTS',
  SET_SHOW_COMMENT_FORM = 'SET_SHOW_COMMENT_FORM'
}

interface CommentsGetCommentsAction {
  type: CommentsActionTypes.GET_COMMENTS,
  payload: PostComment[],
}

interface CommentsSetPostCommentsAction {
  type: CommentsActionTypes.SET_POST_COMMENTS,
  payload: PostComment[],
}

interface CommentsSetShowCommentFormAction {
  type: CommentsActionTypes.SET_SHOW_COMMENT_FORM,
}

export type CommentsActions = CommentsGetCommentsAction | CommentsSetPostCommentsAction | CommentsSetShowCommentFormAction