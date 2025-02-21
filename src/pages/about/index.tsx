import '../../utils/i18n'
import { MainContainer } from '../../components/MainContent/styles';
import { Paragraph } from '../../components/Paragraph/styles';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();
  return (
    <MainContainer>
      <h1>{t("about")}</h1>
      <Paragraph>
      <span>{t("aboutText")}</span>
      </Paragraph>
    </MainContainer>
  );
}