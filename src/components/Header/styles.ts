import styled from "styled-components";

export const HeaderContainer = styled.div`
    border-radius: 8px;
    width: 100%;
    height: 70px;
    background-color: ${props => props.theme["green-500"]};
    a{
        font-size: 30px,
    }
`