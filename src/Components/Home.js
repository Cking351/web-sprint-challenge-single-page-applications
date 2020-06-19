import React from 'react'
import { Link } from 'react-router-dom'


export default function Home (props) {
    const greeting = props.greeting

    return (
        <div>
            <h2>{greeting}</h2>
            <h3>All that Pizza You Want!</h3>
            <Link to="/pizza" className='myBtn order'>Order Here</Link>
        </div>
    )
}