import React from 'react'
import s from './MovieItem.module.css'

export default function MovieItem(props) {


    return (
        <div  className={s.movieBlock}>
            <div className={s.imgWrapper}>
                {props.movie.backdrop_path == null ? <img src='https://www.freelogodesign.org/file/app/client/thumb/b4bf806a-ff20-41f1-8def-90e5d076092b_200x200.png?1594306065848'></img>:<img alt='poster' src={`https://image.tmdb.org/t/p/w185${props.movie.backdrop_path}`}></img>}
            </div>
            <div className={s.movieInfo}>
                <h4 className={s.title}>{props.movie.original_title}</h4>

                <p className='movie-descr'> {props.movie.overview}</p>
                <p className='movie-data'>{props.movie.release_date}</p>
                <a target="_blank" rel="noopener noreferrer" href={`https://www.google.com`}>
                    <button>Check movie</button>
                </a>
            </div>
        </div>
    )
}