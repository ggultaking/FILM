import React from "react";
import "./ListPage.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const ListPage = () => {
  
  const movies = useSelector((store)=>store.favoriteReducer.FavoriteFilms);
const listName=useSelector((store)=>store.favoriteReducer.favoriteListName)

  return (
    <div className="list-page">
      <h1 className="list-page__title">{listName}</h1>
      <ul>
        {movies.map((item) => {
          console.log(movies);
          return (
            
            <li key={item.imdbID}>
              <a href={`https://www.imdb.com/title/${item.imdbID}/`}target="_blank" rel="noopener noreferrer">
                {item.Title} ({item.Year})
              </a>
             
            </li>
          );
        })}
        <br/>
        <br/>
        <br/>
        <Link to="/">Back to Home Page</Link>
      </ul>
    </div>
  );
};

export default ListPage;
