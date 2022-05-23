import { combineReducers } from 'redux';
import { commentsReducer } from './comments';
import { postsReducer } from './posts';
import { usersReducer } from './users';
import { reducer as formReducer } from 'redux-form'

export const rootReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
  comments: commentsReducer,
  form: formReducer,
})

export type RootState = ReturnType<typeof rootReducer>