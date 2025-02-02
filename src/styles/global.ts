import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:focus{
  outline: 0;
  box-shadow: 0 0 0 2px #d4d4a1
}

body{
  background-color: ${props => props.theme["gray-800"]};
  color: ${props => props.theme.white};
  -webkit-font-smoothing: antialised;
  padding: 1rem;
}

body, input, textarea, button {
  font-family: 'Red Hat Display Variable', sans-serif;
}

h1 {
  font-size: 2.5rem;
}

h2 {
  font-size: 2rem;
}

h3 {
  font-size: 1.75rem;
}

h4 {
  font-size: 1.5rem;
}

h5 {
  font-size: 1.25rem;
}

h6 {
  font-size: 1rem;
}

p {
  font-size: 1.25rem;
}

.mc {
  display: flex;
  padding: 2rem;
}

.firstSection {
  padding-top: 3.75rem;
}

.ico {
  margin-right: 0.5rem;
  height: 0.85rem;
  width: 0.85rem;
}

.bgb {
  background-color: ${props => props.theme["dark-cream"]};
  color: ${props => props.theme.white};
  border: none;
  &:focus {
    box-shadow: none;
  }
};
`