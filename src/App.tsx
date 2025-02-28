import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Projects from './pages/projects';
import { HashRouter } from 'react-router-dom';
import '@fontsource-variable/red-hat-display';
import Skills from './pages/skills';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <HashRouter>
        <section
          id="home"
          className="firstSection"
        >
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <section id="projects">
          <Projects />
        </section>
      </HashRouter>
      <Footer />
    </ThemeProvider>
  );
}

export default App;