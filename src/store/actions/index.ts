import * as UsersActions from './users'
import * as PostsActions from './posts'
import * as CommentsActions from './comments'
import { reset } from 'redux-form'

export const actions = {
  ...UsersActions,
  ...PostsActions,
  ...CommentsActions,
  reset
}