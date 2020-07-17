import {LOAD_MOVIES} from './types'
import {HANDLE_CHANGE} from './types'

const initialState = {
    movies:[],
    searchTerm:'',
    pageSize: 20,
    totalMoviesCount:0,
    currentPage:1
}


export const movieReducer = (state = initialState, action)  => {

    switch(action.type){
        case LOAD_MOVIES:{
          /*  const movies = action.meta.isSearch ? action.payload : [
                    ...state.movies,
                    ...action.payload
                ];*/
            return{
                ...state,
                movies: action.payload,
                totalMoviesCount: action.meta.totalMoviesCount,
                currentPage: action.meta.currentPage
            }
        }
        case HANDLE_CHANGE:{
            return{
                ...state,
                searchTerm:action.payload.searchTerm
            }
        }
        default:
            return state;
    }

}