import {CombinedState} from "@reduxjs/toolkit";
import {IState} from "../models/IState";

export function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem("persistentState");
    if (serialisedState === null) return {};
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

export function saveToLocalStorage(state: CombinedState<{jokeSlice: IState, FavoriteJokeSlice: IState}>) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("persistentState", serialisedState);
  } catch (e) {
    console.warn(e);
  }
}