import React from "react";
import styled from 'styled-components'


const StyledImage = styled.img`
    width: 60%;
`

export default function Image(props) {
    const { url }= props

    return (
        <div>
            <img src={url}/>
        </div>
    )
}
