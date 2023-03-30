
import { combineReducers } from "redux"
import favoriteReducer from "./addFavorite/favoriteReducer"
import searchReducer from './searchFilm/searchReducer'

 const rootReducer=combineReducers({favoriteReducer,searchReducer})
 export default rootReducer