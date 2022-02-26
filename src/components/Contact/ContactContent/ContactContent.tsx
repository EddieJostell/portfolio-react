import * as React from 'react';
import { IContactItem } from '../../../utils/data';
import { HelperContext, IContextState } from '../../../utils/HelperContext';

interface ContactContentProps {}

export const ContactContent = (props: ContactContentProps) => {
  const contactInfo = React.useContext<IContextState>(HelperContext);

  const displayContactInfo = () => {
    return contactInfo.contactItem.map((con: IContactItem, key: number) => (
      <li key={key} className="List-items">
        <a href={con.link} target="_blank" rel="noopener noreferrer">
          <img alt={con.title} src={con.iconSrc} />
        </a>
        <a href={con.link} target="_blank" rel="noopener noreferrer">
          <h3>{con.title}</h3>
        </a>
      </li>
    ));
  };

  return <ul className="List">{displayContactInfo()}</ul>;
};
