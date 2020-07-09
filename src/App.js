import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Sidebar from './components/Sidebar/Sidebar.js'
import Home from './components/Home/Home.js'
import Movies from './components/Movies/Movies.js'
import Serials from './components/Serials/Serials.js'
import Header from './components/Header/Header.js'
import Footer from './components/Footer/Footer.js'

function App() {
  return (
    <Router>
        <div className="App">
            <Header/>
            <Sidebar/>

            <div className="appWrapper">
                        <Route path='/home'
                               render = { () => <Home/> }/>
                        <Route path='/movies'
                               render = { () => <Movies/> }/>
                        <Route path='/serials'
                               render = { () => <Serials/> }/>
            </div>
            <Footer/>
        </div>
    </Router>
  );
}

export default App;
