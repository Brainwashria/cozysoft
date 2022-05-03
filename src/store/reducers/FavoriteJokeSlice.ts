import {createSlice} from "@reduxjs/toolkit";
import {IState} from "../../models/IState";

let initialState: IState = {
  jokes: [],
  isLoading: true
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
      state.isLoading = false;
    }
  }
})

export const { deleteJoke, addNewJoke } = favoriteJokeSlice.actions
export default favoriteJokeSlice.reducer;