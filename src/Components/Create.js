import React from 'react';
import styled from 'styled-components'

const StyledDiv = styled.div`
margin-top: 5%
background-color: white;
border: 1px solid #dff0e1;
box-shadow: 1px 1px;
margin-left: 20%;
margin-right: 20%;
color: black;
`




export default function Create(props) {
    const { details } = props

    if (!details) {
        return <h3>Trying to find your details</h3>
    }


    return (
        <StyledDiv>
            <h2>{details.name}</h2>
            <p>Size: {details.size}</p>
            <p>Special Instructions? {details.instructions}</p>
        </StyledDiv>
    )
}