import { ADD_FILM,DELETE_FILM,LIST_NAME,DELETE_ALL } from "../constant"
const initialState={
    FavoriteFilms:[],
 favoriteListName:"",
}

const favoriteReducer=(state=initialState,action)=>{
    switch(action.type){
     
      case ADD_FILM:
        const checkFilm=state.FavoriteFilms.find((film)=>
        film.imdbID===action.payload.imdbID
        )
        if(checkFilm){
          return state
        }
        else{
          return{
            ...state,
            FavoriteFilms:[...state.FavoriteFilms,action.payload]
          }
        }
        
        case DELETE_FILM:
          return{
            ...state,
            FavoriteFilms:state.FavoriteFilms.filter((film)=>film.imdbID!==action.payload.imdbID)
          }
          case LIST_NAME:
            return{
              ...state,
              favoriteListName:action.payload
            }
            case DELETE_ALL:
              return{
                ...state,
                FavoriteFilms:[]
              }
    default:
        return state
 
}}
export default favoriteReducer