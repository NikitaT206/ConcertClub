import { Key } from 'react';

export interface PostComment {
  postId: Number,
  id: Key,
  name: String,
  email: String,
  body: String,
}

export interface LeaveComment {
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
  SET_SHOW_COMMENT_FORM = 'SET_SHOW_COMMENT_FORM',
  LEAVE_COMMENT = 'LEAVE_COMMENT',
  ERASE_COMMENTS = 'ERASE_COMMENTS'
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

interface CommentsEraseCommentsAction {
  type: CommentsActionTypes.ERASE_COMMENTS,
}

interface CommentsLeaveCommentAction {
  type: CommentsActionTypes.LEAVE_COMMENT,
  payload: PostComment
}

export type CommentsActions = CommentsGetCommentsAction | CommentsSetPostCommentsAction | CommentsSetShowCommentFormAction | CommentsLeaveCommentAction | CommentsEraseCommentsAction