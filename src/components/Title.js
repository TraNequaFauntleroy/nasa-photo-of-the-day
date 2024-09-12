import React from "react";
import styled from 'styled-components'

const StyledTitle = styled.h3`
    color: ${pr => pr.theme.white};
    background-color: ${pr => pr.theme.tertiaryColor};
`

export default function Title(props) {
    const { title } = props

    return (
        <StyledTitle>
            <h3>{title}</h3>
        </StyledTitle>
    )
}

