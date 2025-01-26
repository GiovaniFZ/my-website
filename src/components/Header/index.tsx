import { HashRouter } from "react-router-dom";
import { HeaderContainer, NavLink, HomeLink } from "./styles";

export default function Header(){
  return(
    <HashRouter>
    <HeaderContainer>
      <HomeLink href="/">Giv's Website</HomeLink>
        <nav>
          <NavLink href="#about">About Me</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <NavLink href="#projects">Projects</NavLink>
        </nav>
    </HeaderContainer>
    </HashRouter>
  )
}