import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { Paragraph } from './styles';
import { MainContainer } from '../../components/MainContent/styles';

export default function About() {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ["Hi, I'm Giv, lemme tell you about me!", "So, I'm currently a software engineering student", "I'm also interning on a nice company located in Minas Gerais in Brazil", "And that's it!"],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <MainContainer>
      <h1>About Me</h1>
      <Paragraph>
        <span ref={typedElement} />
      </Paragraph>
    </MainContainer>
  );
}