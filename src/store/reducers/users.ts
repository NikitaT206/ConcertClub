import { UsersActions, UsersActionsTypes, UsersState } from '../../types/users'

const defaultState: UsersState = {
  users: [],
  currentUser: null,
}

export const usersReducer = (state = defaultState, action: UsersActions) => {
  switch(action.type) {
    case UsersActionsTypes.GET_USERS:
      return {...state, users: action.payload}
    case UsersActionsTypes.SET_CURRENT_USER:
      return {...state, currentUser: action.payload}
    default:
      return state
  }
}