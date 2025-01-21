import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { Paragraph } from './styles';
import { MainContainer } from '../../components/MainContent/styles';

export default function About() {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ["About me"],
      typeSpeed: 50,
      backSpeed: 25,
      loop: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <MainContainer>
      <h1>
        <span ref={typedElement} />
      </h1>
      <Paragraph>
      <span>Hi, I'm Giv, lemme tell you about me!, So, I'm currently a software engineering student, interning on a nice company located in Minas Gerais in Brazil, and that's it!</span>
      </Paragraph>
    </MainContainer>
  );
}