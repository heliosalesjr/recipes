import { Link } from 'react-router-dom';
import './Navbar.css';

import React from 'react';
import Searchbar from './Searchbar';

function Navbar() {
  return (
    <div className='navbar'>
        <nav>
            <Link to="/" className="brand">
                <h1>Cooking Stars</h1>
            </Link>
            <Searchbar />
            <Link to="/create">Create Recipe</Link>
        </nav>    
    </div>
  )
}

export default Navbar