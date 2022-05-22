import { TCreator } from './types'
import { ActionCreatorWithoutPayload, ActionCreatorWithPayload } from '@reduxjs/toolkit'

type TActionType = ActionCreatorWithPayload<{
  k: any
  v: any
}, string>
export const actionSetCreator = <T>(action: TActionType) => <K extends keyof T>(k: K, v: T[K]) => action({ k, v })

export const setCreator = <T>() => {
  const action: TCreator<T>  = (state, action) => {
    const { k, v } = action.payload
    state[k] = v
    return state
  }
  return action
}

