import { combineReducers } from 'redux';
import { commentsReducer } from './comments';
import { postsReducer } from './posts';
import { usersReducer } from './users';

export const rootReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
  comments: commentsReducer,
})

export type RootState = ReturnType<typeof rootReducer>