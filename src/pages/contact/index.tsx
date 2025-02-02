import { useState } from 'react';
import { Button, TextArea } from './styles';
import { MainContainer } from '../../components/MainContent/styles';
import { Send } from 'lucide-react';
import { Paragraph } from '../../components/Paragraph/styles';

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
        <TextArea
          onChange={(e) => setTypedText(e.target.value)}
          className="bgb"  
        />
        <Button type='submit'><Send className="ico" />Send</Button>
      </form>
    </MainContainer>
  );
}