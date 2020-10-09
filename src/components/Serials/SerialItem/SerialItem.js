import React from 'react'
import s from './SerialItem.module.css'

export default function MovieItem(props) {


    return (
        <div  className={s.serialBlock}>
            <div className={s.imgWrapper}>
                { props.serial.backdrop_path == null ? <img src='https://www.freelogodesign.org/file/app/client/thumb/b4bf806a-ff20-41f1-8def-90e5d076092b_200x200.png?1594306065848'></img>:<img alt='poster' src={`https://image.tmdb.org/t/p/w185${props.serial.backdrop_path}`}></img>}
            </div>
            <div className={s.movieInfo}>
                <h4 className={s.title}>{props.serial.original_name}</h4>

                <p className='movie-descr'> {props.serial.overview}</p>
                <p className='movie-data'>{props.serial.first_air_date}</p>
                <a target="_blank" rel="noopener noreferrer" href={`https://www.google.com`}>
                    <button>Search detail yourself</button>
                </a>
            </div>
        </div>


    )
}