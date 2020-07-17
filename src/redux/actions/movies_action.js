import {LOAD_MOVIES} from '../types'
import {HANDLE_CHANGE} from '../types'

const apikey = '4fbb4691e328ec322d3358761a861113';

export const loadMovies = (searchTerm) => (dispatch) =>{
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${searchTerm}`)
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
            dispatch({
                type:LOAD_MOVIES,
                payload:data.results,
                meta:{
                    totalMoviesCount: data.total_results,
                    currentPage: data.page,
                    isSearch: !!searchTerm
                }
            })
        });
}

export const handleChange = (searchText) => (dispatch) => {


    dispatch({
         type:HANDLE_CHANGE,
         payload:{searchTerm: searchText}

    })
}


