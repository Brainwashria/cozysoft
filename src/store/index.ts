import {configureStore} from '@reduxjs/toolkit'
import jokeSlice from './reducers/JokeSlice'
import FavoriteJokeSlice from "./reducers/FavoriteJokeSlice";
import {combineReducers} from "@reduxjs/toolkit";
import {loadFromLocalStorage} from "../services";

const rootReducer = combineReducers({
  jokeSlice, FavoriteJokeSlice
})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = typeof store
export type AppDispatch = AppStore['dispatch']

const persistedState = loadFromLocalStorage();
export const store = configureStore({
  preloadedState: persistedState,
  reducer: rootReducer,
})



