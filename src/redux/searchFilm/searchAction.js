import { SEARCH_FILM } from "../constant";

export const searchFilmAction=(film)=>({
    type:SEARCH_FILM,
    payload:film
})