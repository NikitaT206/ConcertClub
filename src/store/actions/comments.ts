import { Dispatch } from 'redux'
import { PostComment, CommentsActionTypes, CommentsActions } from '../../types/comments'
import { fetchComments } from '../../utils/api'

export function getComments() {
  return async (dispatch: Dispatch<CommentsActions>) => {
    try {
      const data = await fetchComments()
      dispatch({ type: CommentsActionTypes.GET_COMMENTS, payload: data })
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