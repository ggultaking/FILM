import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { searchFilmAction } from "../../redux/searchFilm/searchAction";

import "./SearchBox.css";
const SearchBox = () => {
  const [searchLine, setSearchLine] = useState("");
const dispatch=useDispatch();
  const searchLineChangeHandler = (e) => {
    setSearchLine(e.target.value);
  };
  const searchBoxSubmitHandler = (e) => {
    e.preventDefault();
    fetch(`http://www.omdbapi.com/?s=${searchLine}&apikey=226bff17`)
  .then((res) => res.json())
  .then((data) => {
    const searchResults = data.Search || []; // If data.Search is undefined, default to an empty array

    dispatch(searchFilmAction(searchResults));

   
  })
 
  };

  return (
    <div className="search-box">
      <form className="search-box__form" onSubmit={searchBoxSubmitHandler}>
        <label className="search-box__form-label">
          Искать фильм по названию:
          <input
            value={searchLine}
            type="text"
            className="search-box__form-input"
            placeholder="Например, Shawshank Redemption"
            onChange={searchLineChangeHandler}
          />,
        
        </label>
        <button
          type="submit"
          className="search-box__form-submit"
          disabled={!searchLine}
          onClick={searchBoxSubmitHandler}
        >
          Искать
        </button>
      </form>
      <div className="movies-container">
     

      </div>
    </div>
  );
};

export default SearchBox;
