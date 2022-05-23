import { Key } from 'react'
import { Dispatch } from 'redux'
import { PostComment, CommentsActionTypes, CommentsActions, LeaveComment } from '../../types/comments'
import { fetchComments, postComment } from '../../utils/api'

export function getComments(postId: Key | undefined) {
  return async (dispatch: Dispatch<CommentsActions>) => {
    try {
      const data = await fetchComments(postId)
      dispatch({ type: CommentsActionTypes.GET_COMMENTS, payload: data })
    } catch (err) {
      return await Promise.reject(err)
    }
  }
}

export function leaveComment(postId: Key | undefined, comment: LeaveComment) {
  return async (dispatch: Dispatch<CommentsActions>) => {
    try {
      const data = await postComment(postId, comment)
      dispatch({ type: CommentsActionTypes.LEAVE_COMMENT, payload: data })
    } catch (err) {
      return await Promise.reject(err)
    }
  }
}

export function setPostComments(comments: PostComment[]) {
  return (dispatch: Dispatch<CommentsActions>) => {
    dispatch({type: CommentsActionTypes.SET_POST_COMMENTS, payload: comments})
  }
}

export function setShowCommentForm() {
  return (dispatch: Dispatch<CommentsActions>) => {
    dispatch({type: CommentsActionTypes.SET_SHOW_COMMENT_FORM})
  }
}