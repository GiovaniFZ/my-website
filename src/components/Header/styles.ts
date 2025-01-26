import styled from "styled-components";

export const HomeLink = styled.a`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${props => props.theme.white};
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: ${props => props.theme["cream"]};
  }
`;

export const NavLink = styled.a`
  font-size: 1rem;
  color: ${props => props.theme.white};
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: ${props => props.theme["cream"]};
  }
`;

export const HeaderContainer = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  border-radius: 8px;
  width: 100%;
  height: 70px;
  background-color: ${props => props.theme["green-400"]};
  color: ${props => props.theme.white};

  nav {
    display: flex;
    gap: 1rem;
  }
`;