import { Dispatch } from 'redux'
import { User, UsersActions, UsersActionsTypes } from '../../types/users'
import { fetchUsers } from '../../utils/api'

export function getUsers() {
  return async (dispatch: Dispatch<UsersActions>) => {
    try {
      const data = await fetchUsers()
      dispatch({ type: UsersActionsTypes.GET_USERS, payload: data })
    } catch (err) {
      return await Promise.reject(err)
    }
  }
}

export function setCurrentUser(user: User) {
  return (dispatch: Dispatch<UsersActions>) => {
    dispatch({type: UsersActionsTypes.SET_CURRENT_USER, payload: user})
  }
}