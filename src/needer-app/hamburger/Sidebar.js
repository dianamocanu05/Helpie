/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import {slide as Menu} from 'react-burger-menu';
import './Sidebar.css';
import {Link} from 'react-router-dom';



export default props => {
    const username = localStorage.getItem('user');
    return (
        <Menu right >
            <Link className="menu-item" to="/">
                Home
            </Link>
            <Link className="menu-item" to="/needer/help">
                Help
            </Link>
            <Link className="menu-item" to="/needer/form">
                Complete Form
            </Link>
            <p> Hello, {username}</p>   
        </Menu>        
    );
};