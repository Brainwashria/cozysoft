import { TState as TJokeState } from '../store/reducers/JokeSlice'
import { TState as TFavoriteState } from '../store/reducers/FavoriteJokeSlice'

type TLocalStorage = {jokeSlice: TJokeState, FavoriteJokeSlice: TFavoriteState};

export function loadFromLocalStorage(): Partial<TLocalStorage> {
  try {
    const serialisedState = localStorage.getItem("persistentState");
    if (serialisedState === null) return {};
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return {};
  }
}

export function saveToLocalStorage(state: TLocalStorage): void {
  const serialisedState = JSON.stringify(state);
  localStorage.setItem("persistentState", serialisedState);
}