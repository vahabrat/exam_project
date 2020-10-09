import {combineReducers} from 'redux'
import {movieReducer} from './movieReducer.js'
import {serialReducer} from './serialReducer.js'


const rootReducer = combineReducers({
    movies: movieReducer,
    serials_state:serialReducer
})

export default rootReducer;