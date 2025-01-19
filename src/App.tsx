import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Projects from './pages/projects';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
        <Header />
          <Home />
          <About />
          <Contact />
          <Projects />
    </ThemeProvider>
  );
}

export default App;