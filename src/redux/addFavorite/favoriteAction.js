import { ADD_FILM,DELETE_FILM,LIST_NAME,DELETE_ALL } from "../constant"


export const addFilmAction=(film)=>({
    type:ADD_FILM,
    payload:film
})

export const deleteFilmAction=(film)=>({
type:DELETE_FILM,
payload:film
})

export const createFavoriteList=(listName)=>({
type:LIST_NAME,
payload:listName
})
export const deleteAllAction=()=>({
    type:DELETE_ALL
})