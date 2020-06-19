import React from 'react'
import { Link } from 'react-router-dom';

export default function Header () {
    return (
        <header className='header'>
            <div>
                <h1>Lambda Eats</h1>
            </div>
            <div>
                <nav>
                    <Link to "/" classname='myBtn'>Home</Link>
                    <Link to="/pizza" className='myBtn order'>Order Here</Link>
                </nav>
            </div>
        </header>
    )
}