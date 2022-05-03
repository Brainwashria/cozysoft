import {IJokeItemProps} from "../../models/IJokeItemProps";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {addNewJoke, deleteJoke} from "../../store/reducers/FavoriteJokeSlice";

export default function JokeItem(props: IJokeItemProps) {
  const dispatch = useAppDispatch();
  const favJokes = useAppSelector((state) => {return state.FavoriteJokeSlice.jokes})
  const jokeObj = favJokes.find((joke) => {return joke.id === props.joke.id});
  let index: number;
  if(jokeObj) {
     index = favJokes.indexOf(jokeObj);
  } else {
    index = -1;
  }
  return (
    <div className='joke-item mb-20'>
      <div className='joke-item__left-side'>
        <p className='joke-item__setup'>{props.joke.setup}</p>
        <p className='joke-item__punchline'>{props.joke.punchline}</p>
      </div>
      {jokeObj ?
        <button className='button button__delete' onClick={() => {dispatch(deleteJoke(index))}}>Delete from favorite</button>
        :
        <button className='button button__add' onClick={() => {dispatch(addNewJoke(props.joke))}}>Add to favorite!</button>}
    </div>
  )
}