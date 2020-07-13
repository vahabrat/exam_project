import React, {Component} from 'react';
import MovieItem from './MovieItem/MovieItem.js'
import SearchForm from './SearchForm/SearchForm.js'
import s from './Movies.module.css'
/*import Pagination from '../Pagination/Pagination.js'*/

const apikey = '4fbb4691e328ec322d3358761a861113';


class Movies extends Component {

    state = {
        movies:[],
        searchTerm:'',

        pageSize: 20,
        totalMoviesCount:0,
        currentPage:1
    }


    handleSubmit = (e) => {
        e.preventDefault();

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${this.state.searchTerm}`)
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
            this.setState({movies:[...data.results], totalMoviesCount: data.total_results, currentPage: data.page})
        });
    };

    handleChange = (e) => {
        this.setState({searchTerm: e.target.value})
    }


    setCurrentPage = (pageNum) => {
        this.setState({currentPage: pageNum})
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${this.state.searchTerm}&page=${pageNum}`)
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
            this.setState({movies:[...data.results], currentPage: data.page})
        });
    };


    render(){
        const countOfPages = Math.ceil( this.state.totalMoviesCount / this.state.pageSize );
        const pages = [];
        for(let i=1; i <= countOfPages; i++) {
            pages.push(i);
        }
        return (
            <div>
                <SearchForm handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
                <div className={s.movies}>
                   {this.state.movies.map(item=><MovieItem movie={item} />)}
                </div>
                <div>
                    { pages.map((pageNum) => {
                        return(
                            <span className={this.state.currentPage === pageNum && s.selectedPage} onClick={ (e) => { this.setCurrentPage(pageNum)}}>{pageNum}</span>)
                    })}
                </div>

            </div>
        );
    }
}

export default Movies;

/*`https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=1`*/
/*
https://api.themoviedb.org/3/search/movie?query=avengers&api_key=4fbb4691e328ec322d3358761a861113*/
