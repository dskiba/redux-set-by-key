import { PayloadAction } from '@reduxjs/toolkit'

export type extractGeneric<Type> = Type extends TCreator<infer X> ? X : never


export type TCreator<T> = <K extends keyof T>(state: T, action: PayloadAction<{ k: K, v: T[K] }>) => T
