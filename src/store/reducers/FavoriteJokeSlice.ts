import {createSlice} from "@reduxjs/toolkit";
import {TJoke} from "../../components/JokeItem/types";

export type TState = {
  jokes: Array<TJoke>,
}

const initialState: TState = {
  jokes: [],
}

const favoriteJokeSlice = createSlice({
  name: 'favJokes',
  initialState,
  reducers: {
    deleteJoke: (state, action) => {
      const index = action.payload
      state.jokes.splice(index, 1);
    },
    addNewJoke: (state, action) => {
      state.jokes = [...state.jokes,action.payload]
    }
  }
})

export const { deleteJoke, addNewJoke } = favoriteJokeSlice.actions
export default favoriteJokeSlice.reducer;