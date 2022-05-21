import { Comments, CommentsActions, CommentsActionTypes } from '../../types/comments'

const defaultState: Comments = {
  comments: [],
  postComments: [],
  showCommentForm: false
}

export const commentsReducer = (state = defaultState, action: CommentsActions) => {
  switch(action.type) {
    case CommentsActionTypes.GET_COMMENTS:
      return {...state, comments: action.payload}
    case CommentsActionTypes.SET_POST_COMMENTS:
      return {...state, postComments: action.payload}
    case CommentsActionTypes.SET_SHOW_COMMENT_FORM:
      return {...state, showCommentForm: !state.showCommentForm}
    default:
      return state
  }
}