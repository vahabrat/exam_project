import {LOAD_SERIALS} from '../types'
import {HANDLE_CHANGE_SERIALS} from '../types'

const apikey = '4fbb4691e328ec322d3358761a861113';

export const loadSerials = (searchTerm) => (dispatch) =>{
        fetch(`https://api.themoviedb.org/3/search/tv?api_key=${apikey}&query=${searchTerm}`)
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
            dispatch({
                type:LOAD_SERIALS,
                payload:data.results,
                meta:{
                    totalMoviesCount: data.total_results,
                    currentPage: data.page,
                    isSearch: !!searchTerm
                }
            })
        });
}

export const handleChangeSerials = (searchText) => (dispatch) => {


    dispatch({
         type:HANDLE_CHANGE_SERIALS,
         payload:{searchTerm: searchText}

    })
}