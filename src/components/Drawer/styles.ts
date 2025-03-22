import styled from "styled-components";

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
&:focus {
  outline: none;
  border: 0;
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
  animation-duration: 0.3s;
  z-index: 2;
  @keyframes drawerAnimation {
    0% {width: 0px};
    100% {width: 200px};
}
`

export const DrawerItem = styled.a`
text-decoration: none;
padding: 1rem;
display: block;
color: white;
cursor: pointer;
animation-name: slideIn;
animation-duration: 0.5s;

@keyframes slideIn{
    0% {
        transform: translateX(-100%);
        opacity: 0;
      }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}

&:hover {
    color: ${props => props.theme.cream}
}
`