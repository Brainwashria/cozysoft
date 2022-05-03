import {createSlice} from "@reduxjs/toolkit";
import {IState} from "../../models/IState";

let initialState: IState = {
  jokes: [],
  isLoading: true
}

 const jokeSlice = createSlice({
  name: 'jokes',
  initialState,
  reducers: {
    fetchStartLoading: (state) => {
      state.isLoading = true;
    },
    fetchNewJokes: (state, action) => {
      state.jokes = action.payload
      state.isLoading = false;
    }
  }
})

export const { fetchNewJokes, fetchStartLoading } = jokeSlice.actions
export default jokeSlice.reducer;


