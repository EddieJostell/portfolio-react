import * as React from 'react';
import { IContactItem } from '../../utils/data';
import './ContactSlim.scss';

interface IContactSlimProps {
  contactInfo: IContactItem[];
}

const ContactSlim = (props: IContactSlimProps) => {
  const { contactInfo } = props;
  console.log('contact', contactInfo);
  const displayContactInfo = () => {
    return contactInfo.map((tact, key) => (
      <div className="ContactSlim-wrapper" key={key}>
        <div className="ContactSlim-right">
          <img alt={tact.title} src={tact.iconSrc} />
        </div>
        <div className="ContactSlim-left">
          <div>{tact.link}</div>
          <div>{tact.text}</div>
          <div>{tact.title}</div>
        </div>
      </div>
    ));
  };

  return <div className="ContactSlim">{displayContactInfo()}</div>;
};

export default ContactSlim;
