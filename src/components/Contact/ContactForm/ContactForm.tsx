import React from 'react';
import './ContactForm.scss';
import '../../Navigation/Navigation.scss';

interface IContactFormProps {
  toggleContact: () => void;
  contactIsActive: boolean;
}

export const ContactForm = (props: IContactFormProps) => {
  const { toggleContact } = props;

  const contactHamburger = () => {
    return (
      <div onClick={() => toggleContact()} className={'icon nav-icon-5'}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    );
  };

  return (
    <div className="Form">
      <div className="Form-about">
        <h1>About</h1>
      </div>
      <div className="Form-contact">
        <h1>Contact</h1>
        {contactHamburger()}
      </div>
    </div>
  );
};
