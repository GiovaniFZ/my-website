import styled from "styled-components";

export const SkillsContainer = styled.div`
display: flex;
margin-top: 1rem;
overflow: hidden;
`

export const Skill = styled.div`
display: flex;
flex-direction: column;
align-items: center;
scroll-snap-type: "x-mandatory";
img{
    display: flex;
    height: 4rem;
}
p{
    margin: 0.5rem;
}
`

export const SlideButton = styled.button`
background: transparent;
border: 0;
cursor: pointer;
margin-right: 2rem;
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
`