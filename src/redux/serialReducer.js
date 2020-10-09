import {LOAD_SERIALS} from './types'
import {HANDLE_CHANGE_SERIALS} from './types'

const initialState = {
    serials:[],
    searchTerm:'',
    pageSize: 20,
    totalMoviesCount:0,
    currentPage:1
}


export const serialReducer = (state = initialState, action)  => {

    switch(action.type){
        case LOAD_SERIALS:{
          /*  const movies = action.meta.isSearch ? action.payload : [
                    ...state.movies,
                    ...action.payload
                ];*/
            return{
                ...state,
                serials: action.payload,
                totalSerialsCount: action.meta.totalMoviesCount,
                currentPage: action.meta.currentPage
            }
        }
        case HANDLE_CHANGE_SERIALS:{
            return{
                ...state,
                searchTerm:action.payload.searchTerm
            }
        }
        default:
            return state;
    }

}