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
  user: User | null
}

export enum UsersActionsTypes {
  GET_USERS =  'GET_USERS',
  SET_USER = 'SET_USER'
}

interface UsersGetUsersAction {
  type: UsersActionsTypes.GET_USERS,
  payload: User[]
}

interface UsersSetUserAction {
  type: UsersActionsTypes.SET_USER,
  payload: User
}

export type UsersActions = UsersGetUsersAction | UsersSetUserAction