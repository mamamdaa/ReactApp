import React from "react";
import {Link} from 'react-router-dom';

function Header(){
    return( 
    <header style={headerStyle}> 
    <h1>My Todolist</h1> 
    <Link to='/ReactApp' style={LinkStyle} >Home</Link> | <Link to='/about' style={LinkStyle}>About</Link>
    </header>
    );
}

const headerStyle = {
    background:'teal',
    color: 'white',
    textAlign: 'center',
    padding: '10px'
}

const LinkStyle = {
    color: 'white',
    textDecoration: 'none',

}

export default Header;