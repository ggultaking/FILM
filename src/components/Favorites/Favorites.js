import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  createFavoriteList,
  deleteAllAction,
  deleteFilmAction,
} from "../../redux/addFavorite/favoriteAction";
import "./Favorites.css";

const Favorites = () => {
  const dispatch = useDispatch();

  const listName = useSelector(
    (store) => store.favoriteReducer.favoriteListName
  );
  const favoriteFilms = useSelector(
    (store) => store.favoriteReducer.FavoriteFilms
  );
  const [saveBtn, setsaveBtn] = useState("Сохранить список");
  const [isClicked, setisClicked] = useState(false);
  const deleteFavorite = (imdbID) => {
    dispatch(deleteFilmAction({ imdbID }));
  };
  const deleteAll = () => {
    dispatch(deleteAllAction());
  };
  const updateListName = (e) => {
    const newListName = e.target.value;
    dispatch(createFavoriteList(newListName));
  };
  const createFavorite = () => {
    setsaveBtn("loading...");
    setTimeout(() => {
      setisClicked(true);
    }, 300);
  };
  const enabled = listName && favoriteFilms.length > 0;
  const isHave=favoriteFilms.length>0
  return (
    <div className="favorites">
      <input
        value={listName}
        className="favorites__name"
        placeholder="Новый список"
        onChange={updateListName}
        disabled={isClicked}
      />

      {favoriteFilms.length > 0 && (
        <ul>
          {favoriteFilms?.map((item) => {
            return (
              <li className="favorite__film" key={item.imdbID}>
                <p className="favorite__film-text">
                  {item.Title} ({item.Year}){" "}
                </p>

                <button
                  className="favorites__button"
                  onClick={() => deleteFavorite(item.imdbID)}
                  disabled={isClicked}
                >
                  X
                </button>
              </li>
            );
          })}
        </ul>
      )}

      {!isClicked ? (
        <button
          type="button"
          className="favorites__save"
          onClick={createFavorite}
          disabled={!enabled}
        >
          {saveBtn}
        </button>
      ) : (
        <Link to="/listpage">Перейти к списку</Link>
      )}
      
      <button
        type="button"
        className="favorites__delete"
        onClick={deleteAll}
        disabled={!isHave}
      >
        удалить все
      </button>
    </div>
  );
};

export default Favorites;
