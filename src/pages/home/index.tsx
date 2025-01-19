import Typed from 'typed.js';
import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { IconContainer, IconLink, HomeLabel } from './styles';
import { MainContainer } from '../../components/MainContent/styles';

export default function Home() {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ["Hi, I'm Giv! Welcome to my website!", "You can navigate through this website by checking out the sections!"],
      typeSpeed: 30,
      backSpeed: 50,
      loop: true,
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
      <HomeLabel>
        My social links
      </HomeLabel>
      <IconContainer>
        <IconLink href="https://t.me/@givfnz2" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTelegram} size="3x" />
        </IconLink>
        <IconLink href="https://github.com/GiovaniFZ" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="3x" />
        </IconLink>
      </IconContainer>
    </MainContainer>
  );
}