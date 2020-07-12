import React from 'react'
import s from './MovieItem.module.css'

export default function MovieItem(props) {


    return (
        <div  className={s.movieBlock}>
            {
                props.movie.backdrop_path == null ? <img src='https://www.freelogodesign.org/file/app/client/thumb/b4bf806a-ff20-41f1-8def-90e5d076092b_200x200.png?1594306065848'></img>:<img alt='poster' src={`https://image.tmdb.org/t/p/w185${props.movie.backdrop_path}`}></img>
            }

            <div className='movie-info'>
                <h4 className='movie-title'>Movie title:{props.movie.original_title}</h4>
                <p className='movie-rating'>Movie rating:</p>
                <p className='movie-descr'> Movie description:</p>
                <p className='movie-data'>Movie data release:</p>
                <a target="_blank" rel="noopener noreferrer" href={`https://www.google.com`}>
                    <button>Check movie</button>
                </a>
            </div>
        </div>
    )
}