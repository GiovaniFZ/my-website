import styled from "styled-components";

export const SkillsContainer = styled.div`
display: flex;
flex-direction: row;
margin-top: 1rem;
align-items: center;
justify-content: center;
p {
    margin-left: 0.3rem;
    margin-right: 2.5rem;
}
@media(max-width: 1090px){
    flex-direction: column;
    p{
        margin: 0 0 1rem 0;
    }
}
`