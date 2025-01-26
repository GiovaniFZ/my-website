import { HashRouter } from "react-router-dom";
import { HeaderContainer, NavLink, HomeLink } from "./styles";
import { AvatarHeader } from "../Avatar/avatar";

export default function Header() {
  return (
    <HashRouter>
      <HeaderContainer>
        <HomeLink href="/">
          <AvatarHeader src="https://avatars.githubusercontent.com/u/53719063?v=4" alt="Giv's Gh picture" />
          Giv's Website
        </HomeLink>
        <nav>
          <NavLink href="#about">About Me</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <NavLink href="#projects">Projects</NavLink>
        </nav>
      </HeaderContainer>
    </HashRouter>
  )
}