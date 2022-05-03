import {createSlice} from "@reduxjs/toolkit";
import {TJoke} from "../../components/JokeItem/types";

export type TState = {
  jokes: Array<TJoke>,
  isLoading: boolean
}

const initialState: TState = {
  jokes: [],
  isLoading: true
}

 const jokeSlice = createSlice({
  name: 'jokes',
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    fetchNewJokes: (state, action) => {
      state.jokes = action.payload
      state.isLoading = false;
    }
  }
})

export const { fetchNewJokes, startLoading } = jokeSlice.actions
export default jokeSlice.reducer;


