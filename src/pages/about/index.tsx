import { Paragraph } from './styles';
import { MainContainer } from '../../components/MainContent/styles';

export default function About() {
  return (
    <MainContainer>
      <h1>About Me</h1>
      <Paragraph>
      <span>I'm Giv, a software engineering student interning at a nice company located in Minas Gerais, Brazil!</span>
      </Paragraph>
    </MainContainer>
  );
}