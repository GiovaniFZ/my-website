import { useState } from 'react';
import { Button, TextArea } from './styles';
import { MainContainer } from '../../components/MainContent/styles';
import { Send } from 'lucide-react';
import { Paragraph } from '../../components/Paragraph/styles';
import { t } from 'i18next';

export default function Contact() {
  const emailAddress = import.meta.env.VITE_GIV_EMAIL;
  const [typedText, setTypedText] = useState('');

  function handleSubmit() {
    const mailToTrigger = 'mailto:' + emailAddress + '&subject=I visited your website!&body=' + typedText;
    window.location.href = mailToTrigger
  }

  return (
    <MainContainer>
      <h1>{t("contact")}</h1>
      <Paragraph>
        <span>{t("contactInfo")}</span>
      </Paragraph>
      <form onSubmit={handleSubmit}>
        <TextArea
          onChange={(e) => setTypedText(e.target.value)}
          className="bgb"  
        />
        <Button type='submit'><Send className="ico" />{t("send")}</Button>
      </form>
    </MainContainer>
  );
}