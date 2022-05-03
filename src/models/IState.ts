import {TJoke} from "../components/JokeItem/types";

export interface IState {
  jokes: Array<TJoke>,
  isLoading: boolean
}