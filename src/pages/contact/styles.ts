import styled from 'styled-components';

export const TextArea = styled.textarea`
  height: 10rem;
  margin-top: 1rem;
  width: 100%;
  padding: 1rem;
  border-radius: 8px;
`;

export const Button = styled.button`
all: unset;
display: block;
margin-top: 1rem;
padding: 1rem;
border-radius: 8px;
cursor: pointer;
background-color: ${props => props.theme["green-400"]};
&:hover{
  background-color: ${props => props.theme["green-300"]};
}
`