import React, {Component} from 'react';
import MovieItem from './MovieItem/MovieItem.js'
import SearchForm from './SearchForm/SearchForm.js'
import s from './Movies.module.css'
import Pagination from '../Pagination/Pagination.js'

const apikey = '4fbb4691e328ec322d3358761a861113';


class Movies extends Component {

    state = {
        movies:[],
        searchTerm:'',
        totalResults:0,
        currentPage:1
    }


    handleSubmit = (e) => {
        e.preventDefault();

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${this.state.searchTerm}`)
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
            this.setState({movies:[...data.results], totalResults: data.total_results})
        });
    };

    handleChange = (e) => {
        this.setState({searchTerm: e.target.value})
    }

    nextPage = (pageNumber) => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${this.state.searchTerm}&page=${pageNumber}`)
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
            this.setState({movies:[...data.results], currentPage: pageNumber})
        });

    }

    render(){

        return (
            <div>
                <SearchForm handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
                <div className={s.movies}>
                   {this.state.movies.map(item=><MovieItem movie={item} />)}
                </div>
            </div>
        );
    }
}

export default Movies;

/*`https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=1`*/
/*
https://api.themoviedb.org/3/search/movie?query=avengers&api_key=4fbb4691e328ec322d3358761a861113*/
