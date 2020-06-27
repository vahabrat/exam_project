import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SidebarExample from './components/Sidebar.js'

function App() {
  return (
    <div className="App">
        <SidebarExample/>
    </div>
  );
}

export default App;
