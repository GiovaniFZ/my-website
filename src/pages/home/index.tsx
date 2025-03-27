import Typed from 'typed.js';
import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { IconContainer, IconLink, HomeLabel, TopSection } from './styles';
import { MainContainer } from '../../components/MainContent/styles';
import { Avatar } from '../../components/Avatar/avatar';
import { Paragraph } from '../../components/Paragraph/styles';
import { useTranslation } from 'react-i18next';
import i18n from '../../utils/i18n';

export default function Home() {
  const { t } = useTranslation();
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: [t("welcome")],
      typeSpeed: 70,
      backSpeed: 50,
      loop: false,
    });

    return () => {
      typed.destroy();
    };
  }, [i18n.language]);

  return (
    <MainContainer>
      <TopSection>
        <Avatar src="https://avatars.githubusercontent.com/u/53719063?v=4" alt="GitHub Profile Picture" />
        <Paragraph>
          <span ref={typedElement} />
        </Paragraph>
      </TopSection>
      <HomeLabel>
        {t("checkSocialLinks")}
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