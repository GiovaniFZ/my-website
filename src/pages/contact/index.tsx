import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { Button, Paragraph, TextArea } from './styles';
import { MainContainer } from '../../components/MainContent/styles';

export default function Contact() {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ["If you want to contact me, you can use the links on Main section, or say something in the field below!"],
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
      <h1>Contact</h1>
      <Paragraph>
        <span ref={typedElement} />
      </Paragraph>
      <TextArea />
      <Button>Send</Button>
    </MainContainer>
  );
}