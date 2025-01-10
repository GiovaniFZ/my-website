import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { Paragraph } from './styles';

export default function Contact() {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ["This page is coming soon. Thanks for your patience :)"],
      typeSpeed: 50,
      backSpeed: 25,
      loop: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <h1>Contact</h1>
      <Paragraph>
        <span ref={typedElement} />
      </Paragraph>
    </div>
  );
}