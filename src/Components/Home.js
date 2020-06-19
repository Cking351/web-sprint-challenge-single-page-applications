import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Pizza.jpg'
import styled from 'styled-components'
import { Button } from 'reactstrap'

const StyledDiv = styled.div`
    text-align: center;
    margin-top: 5%
`



export default function Home (props) {
    const greeting = props.greeting

    

    return (
        <StyledDiv>
            <h2>{greeting}</h2>
            <button><Link to="/pizza">Order Here</Link></button>
        </StyledDiv>
    )
}