import styled from "styled-components";

export const MainContainer = styled.div`
    padding: 3rem;
    margin: 3rem;
    background-color: ${props => props.theme["gray-700"]};
    border-radius: 8px;
    @media(max-width: 640px){
        margin: 0 0 3rem 0;
    }
`