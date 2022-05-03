import {useAppSelector} from "../hooks";
import JokeItem from "../components/JokeItem";
import React from "react";
import {Link} from "react-router-dom";

function FavoritePage() {
  const jokes = useAppSelector((state) => {return state.FavoriteJokeSlice.jokes})
  return (
    <div className='favorite-page'>
      <div className='container'>
        <div className='favorite-page__header'>
          <h1>Favorite</h1>
          <Link to='/'>
          <button className='button'>Back to main</button>
          </Link>
        </div>
        {jokes && jokes.map(joke => {return <JokeItem key={joke.id} joke={joke}/>})}
      </div>
    </div>
  )
}

export default FavoritePage;