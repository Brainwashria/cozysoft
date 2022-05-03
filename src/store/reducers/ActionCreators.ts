import {AppDispatch} from "../index";
import {requests} from "../../api/requests";
import {fetchNewJokes, fetchStartLoading} from "./JokeSlice";

export const fetchJokes = () => async (dispatch: AppDispatch) => {
  dispatch(fetchStartLoading)
  let query = await requests.getJokes();
  dispatch(fetchNewJokes(query));
}