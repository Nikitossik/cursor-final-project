import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
            <nav className='navBar'>

                <div className='nav'>
                    <Link exact to='/home/charges'> Homepage </Link>
                </div>

                <div className='nav'>  
                    <Link to='/categories'> Categories </Link> 
                </div>

                <div className='nav'>
                    <Link to='/charts'> Charts </Link> 
                </div>

            </nav>
    )
}
export default NavBar;

