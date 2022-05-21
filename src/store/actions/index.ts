import * as UsersActions from './users'
import * as PostsActions from './posts'
import * as CommentsActions from './comments'

export const actions = {
  ...UsersActions,
  ...PostsActions,
  ...CommentsActions,
}