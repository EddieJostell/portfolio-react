import * as React from 'react';
import ContactContent from './ContactContent/ContactContent';
import './Contact.scss';

interface IContactProps {}

const Contact = (props: IContactProps) => {
  return (
    <div className="Contact" id="contact">
      <div className="Contact-title">
        <h1>CONTACT ME</h1>
      </div>
      <ContactContent />
    </div>
  );
};

export default Contact;
