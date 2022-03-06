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
      <div onClick={() => toggleContact()} className={'icon nav-icon-5 open'}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    );
  };

  return (
    <div className="Form">
      <div className="Form-about">
        <div className="title">About</div>
        <div className="content"></div>
      </div>
      <div className="Form-contact">
        <div className="title">Contact</div>
        {contactHamburger()}
        <div className="form"></div>
      </div>
    </div>
  );
};
