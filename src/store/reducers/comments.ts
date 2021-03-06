import { Comments, CommentsActions, CommentsActionTypes } from '../../types/comments'

const defaultState: Comments = {
  comments: [],
  postComments: [],
  showCommentForm: false,
}

export const commentsReducer = (state = defaultState, action: CommentsActions) => {
  switch(action.type) {
    case CommentsActionTypes.GET_COMMENTS:
      return {...state, comments: action.payload}
    case CommentsActionTypes.SET_POST_COMMENTS:
      return {...state, postComments: action.payload}
    case CommentsActionTypes.SET_SHOW_COMMENT_FORM:
      return {...state, showCommentForm: !state.showCommentForm}
    case CommentsActionTypes.ERASE_COMMENTS:
      return {...state, comments: [], postComments: []}
    case CommentsActionTypes.LEAVE_COMMENT:
      return {...state, comments: [...state.comments, action.payload]}
    default:
      return state
  }
}