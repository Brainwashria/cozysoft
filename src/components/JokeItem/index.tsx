import {useAppDispatch, useAppSelector} from "../../hooks";
import {addNewJoke, deleteJoke} from "../../store/reducers/FavoriteJokeSlice";
import {TJoke} from "./types";

interface IJokeItem {
  joke: TJoke
}

export default function JokeItem(props: IJokeItem) {
  const dispatch = useAppDispatch();
  const favJokes = useAppSelector((state) => {return state.FavoriteJokeSlice.jokes})
  const isJokeInFavorite = favJokes.find((joke) => {return joke.id === props.joke.id});

  const remove = () => {
    const index = favJokes.findIndex((joke) => joke.id === props.joke.id);

    dispatch(deleteJoke(index));
  }

  return (
    <div className='joke-item mb-20'>
      <div className='joke-item__left-side'>
        <p className='joke-item__setup'>{props.joke.setup}</p>
        <p className='joke-item__punchline'>{props.joke.punchline}</p>
      </div>
      {isJokeInFavorite ?
        <button className='button button__delete' onClick={remove}>Delete from favorite</button>
        :
        <button className='button button__add' onClick={() => {dispatch(addNewJoke(props.joke))}}>Add to favorite!</button>}
    </div>
  )
}