import React, { useEffect } from 'react';
import JokeItem from "../components/JokeItem";
import {fetchJokes} from "../store/reducers/ActionCreators";
import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../hooks";

function MainPage() {
  const dispatch = useAppDispatch();
  const jokes = useAppSelector((state) => {return state.jokeSlice.jokes})
  const isLoading = useAppSelector((state) => {return state.jokeSlice.isLoading})
  useEffect(() => {
    if(isLoading) {
      dispatch(fetchJokes())
    }
  }, [ isLoading ])
  return (
    <div className='main-page'>
      <div className='container'>
        <div className='main-page__header'>
          <h1>Jokes</h1>
          <Link to='/favorite'>
            <button className='button button__fav'>Favorite</button>
          </Link>
        </div>
        {jokes && jokes.map(joke => {return <JokeItem key={joke.id} joke={joke}/>})}
      </div>
      <button className='button button__upload  mb-20' onClick={() => {dispatch(fetchJokes())}}>Upload</button>
    </div>
  )
}

export default MainPage;