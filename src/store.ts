export interface IUser {
  name: string
  surname: string
  country: string
  city: string
  hobbies: string
}

const initialState: IUser = {
  name: 'John',
  surname: 'Doe',
  country: 'US',
  city: 'New-York',
  hobbies: ''
}

type TRootState = {
  user: IUser
}

const SET_BY_KEY = 'user/set_by_key'

const setByKey = <K extends keyof IUser>(k: K, v: IUser[K]) => ({ type: SET_BY_KEY, payload: { k, v } })
export const actionSeyByKey = <K extends keyof IUser>(k: K, v: IUser[K]) => setByKey(k, v)

type TUserActions = ReturnType<typeof setByKey>

export const userReducer = (state: IUser = initialState, action: TUserActions) => {
  switch (action.type) {
    case (SET_BY_KEY): {
      const { k, v } = action.payload
      return { ...state, [k]: v }
    }
    default:
      return state
  }
}

export const selectUserField = (key: keyof IUser) => (state: TRootState) => state.user[key]
