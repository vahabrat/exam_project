import React from "react";
import {NavLink} from 'react-router-dom'
import s from './Sidebar.module.css'

const Sidebar = () => {

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to ="/home" activeClassName={s.activeLink}>Home</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to ="/movies" activeClassName={s.activeLink}>Movies</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to ="/serials" activeClassName={s.activeLink}>Serials</NavLink>
            </div>
            <div className={s.item}>
                <a>Music</a>
            </div>
            <div className={s.item}>
                <a>Settings</a>
            </div>
        </nav>
    )

}

export default Sidebar;
