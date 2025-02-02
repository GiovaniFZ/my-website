import { useState } from 'react';
import { Button, Paragraph, TextArea } from './styles';
import { MainContainer } from '../../components/MainContent/styles';

export default function Contact() {
  const emailAddress = import.meta.env.VITE_GIV_EMAIL;
  const [typedText, setTypedText] = useState('');

  function handleSubmit() {
    const mailToTrigger = 'mailto:' + emailAddress + '&subject=I visited your website!&body=' + typedText;
    window.location.href = mailToTrigger
  }

  return (
    <MainContainer>
      <h1>Contact</h1>
      <Paragraph>
        <span>If you want to contact me, you can use the links above, or say put in the field below to send me an email!</span>
      </Paragraph>
      <form onSubmit={handleSubmit}>
        <TextArea onChange={(e) => setTypedText(e.target.value)} />
        <Button type='submit'>Send</Button>
      </form>
    </MainContainer>
  );
}