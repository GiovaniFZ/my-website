import Typed from 'typed.js';
import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { IconContainer, IconLink, HomeLabel, TopSection } from './styles';
import { MainContainer } from '../../components/MainContent/styles';
import { Avatar } from '../../components/Avatar/avatar';

export default function Home() {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ["Hi, I'm Giovani! Welcome to my website!"],
      typeSpeed: 70,
      backSpeed: 50,
      loop: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <MainContainer>
      <TopSection>
        <Avatar src="https://avatars.githubusercontent.com/u/53719063?v=4" alt="Giv's Gh picture" />
        <strong>
          <span ref={typedElement} />
        </strong>
      </TopSection>
      <HomeLabel>
        Hey, check out my social links!
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