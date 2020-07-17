import React from 'react'
import s from './SearchForm.module.css'

const SearchForm = (props) => {
    return (
    <form onSubmit={props.handleSubmit}>
        <div className={s.search}>
            <input placeholder='enter your movie' type='text' onChange={props.handleChange} value={props.searchTerm}/>
        </div>
    </form>
    )
}

export default SearchForm;