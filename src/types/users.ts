export interface User {
  id: Number,
  name: String,
  username: String,
  email: String,
  address: {
    street: String,
    suite: String,
    city: String,
    zipcode: String,
    geo: {
      lat: String,
      lng: String
    }
  },
  phone: String,
  website: String,
  company: {
    name: String,
    catchPhrase: String,
    bs: String
  }
}

export interface UsersState {
  users: User[],
  currentUser: User | null
}

export enum UsersActionsTypes {
  GET_USERS =  'GET_USERS',
  SET_CURRENT_USER = 'SET_CURRENT_USER'
}

interface UsersGetUsersAction {
  type: UsersActionsTypes.GET_USERS,
  payload: User[]
}

interface UsersSetCurrentUserAction {
  type: UsersActionsTypes.SET_CURRENT_USER,
  payload: User
}

export type UsersActions = UsersGetUsersAction | UsersSetCurrentUserAction