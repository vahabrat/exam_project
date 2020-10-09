import React, {Component} from 'react';
import SerialItem from './SerialItem/SerialItem.js'
import SearchForm from './SearchFormSerials/SearchForm.js'
import s from './Serials.module.css'
import {connect} from 'react-redux'
import {loadSerials} from '../../redux/actions/serial_action'
import {handleChangeSerials} from '../../redux/actions/serial_action'

const apikey = '4fbb4691e328ec322d3358761a861113';


class Serials extends Component {




    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onLoadSerials(this.props.searchTerm);

        console.log(this.props.movies)
        this.props.handleChangeSerials('')

    };


    handleChange = (e) => {
        const searchText = e.target.value;
        this.props.handleChangeSerials(searchText)
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
        /*const countOfPages = Math.ceil( this.state.totalMoviesCount / this.state.pageSize );
        const pages = [];
        for(let i=1; i <= countOfPages; i++) {
            pages.push(i);
        }*/

        return (
            <div>
                <SearchForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} searchTerm={this.props.searchTerm}/>
                <div className={s.movies}>
                   {this.props.serials.map(item=><SerialItem serial={item} />)}
                </div>
                <div>

                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        serials: state.serials_state.serials,
        searchTerm: state.serials_state.searchTerm
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLoadSerials: (searchTerm) => dispatch(loadSerials(searchTerm)),
        handleChangeSerials: (searchTerm) => dispatch(handleChangeSerials(searchTerm))
    };


}

export default connect(mapStateToProps, mapDispatchToProps)(Serials);