import React, {Component} from 'react';
import MovieItem from './MovieItem/MovieItem.js'

const apikey = '4fbb4691e328ec322d3358761a861113';

class Movies extends Component {

    state = {
        popFilms:[]
    }

    componentDidMount() {
        this.getPopularMovies()
    }

    getPopularMovies() {

        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=1`)
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({popFilms:data.results})
        });
    }


    render(){
        return (
            <div className="movies">
               {this.state.popFilms.map(item=><MovieItem title={item.original_title} />)}

            </div>
        );
    }
}

export default Movies;