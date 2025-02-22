import styled, { keyframes } from "styled-components";

export const Drawer = styled.button`
all: unset;
color: white;
cursor: pointer;
transition: color 0.3s;
display: none;

&:hover {
    color: ${props => props.theme.cream}
}
&::after {
    content: "☰";
}
@media(max-width: 640px){
  display: block;
}
`

export const DrawerContainer = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  border-radius: 8px;
  width: 200px;
  background-color: ${(props) => props.theme["gray-800"]};
  animation-name: drawerAnimation;
`

export const DrawerItem = styled.a`
text-decoration: none;
padding: 1rem;
display: block;
color: white;
cursor: pointer;
&:hover {
    color: ${props => props.theme.cream}
}
`