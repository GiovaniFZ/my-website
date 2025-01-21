import { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import { Button, Paragraph, TextArea } from './styles';
import { MainContainer } from '../../components/MainContent/styles';

export default function Contact() {
  const typedElement = useRef(null);
  const emailAddress = import.meta.env.VITE_GIV_EMAIL;
  const [typedText, setTypedText] = useState('');

  function handleSubmit() {
    const mailToTrigger = 'mailto:' + emailAddress + '&subject=I visited your website!&body=' + typedText;
    window.location.href = mailToTrigger
  }

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ["Contact"],
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
        <span>If you want to contact me, you can use the links on the Main section, or say something in the field below! (It will open your email client btw)</span>
      </Paragraph>
      <form onSubmit={handleSubmit}>
        <TextArea onChange={(e) => setTypedText(e.target.value)} />
        <Button type='submit'>Send</Button>
      </form>
    </MainContainer>
  );
}