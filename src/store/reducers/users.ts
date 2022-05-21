import { UsersActions, UsersActionsTypes, UsersState } from '../../types/users'

const defaultState: UsersState = {
  users: [],
  user: null
}

export const usersReducer = (state = defaultState, action: UsersActions) => {
  switch(action.type) {
    case UsersActionsTypes.GET_USERS:
      return {...state, users: action.payload}
    case UsersActionsTypes.SET_USER:
      return {...state, user: action.payload}
    default:
      return state
  }
}