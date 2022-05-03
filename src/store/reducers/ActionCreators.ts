import {AppDispatch} from "../index";
import {requests} from "../../api/requests";
import {fetchNewJokes, startLoading} from "./JokeSlice";

export const fetchJokes = () => async (dispatch: AppDispatch) => {
  dispatch(startLoading);
  const query = await requests.getJokes();
  dispatch(fetchNewJokes(query));
}