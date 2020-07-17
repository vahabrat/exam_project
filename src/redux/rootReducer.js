import {combineReducers} from 'redux'
import {movieReducer} from './movieReducer.js'


const rootReducer = combineReducers({
    movies: movieReducer,
})

export default rootReducer;