import type { PreloadedState } from '@reduxjs/toolkit'
import { combineReducers, configureStore, createSlice } from '@reduxjs/toolkit'
import { actionSetCreator, setCreator } from './utils'

export interface IUser {
  name: string
  surname: string
  age: number
  country: string
  city: string
  hobbies: string
  employed: boolean
}

const initialState: IUser = {
  name: 'John',
  surname: 'Doe',
  age: 18,
  country: 'US',
  city: 'New-York',
  hobbies: '',
  employed: false
}

const userReducerName = 'user' as const
export const userSlice = createSlice({
  name: userReducerName,
  initialState,
  reducers: {
    set: setCreator<typeof initialState>()
  }
})
const { set } = userSlice.actions
export const actionSet = actionSetCreator<IUser>(set)







actionSet('name', 'john')
// actionSet('age', '18')
actionSet('age', 18)
// actionSet('employed', 'true')
actionSet('employed', true)


const rootReducer = combineReducers({
  user: userSlice.reducer
})
export const setupStore = (preloadedState?: PreloadedState<TRootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}

export type TRootState = ReturnType<typeof rootReducer>;

export const selectUserField = <K extends keyof IUser>(key: K) => (state: TRootState) => state.user[key]

