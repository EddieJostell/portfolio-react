import * as React from 'react';
import { HelperContext, IContextState } from '../../../utils/HelperContext';

interface ContactContentProps {}

const ContactContent = (props: ContactContentProps) => {
  const contactInfo = React.useContext<IContextState>(HelperContext);

  const displayContactInfo = () => {
    return contactInfo.contactItem.map((con, key) => (
      <li key={key} className="List-items">
        <a href={con.link}>
          <img alt={con.title} src={con.iconSrc} />
        </a>
        <a href={con.link}>
          <h3>{con.title}</h3>
        </a>
      </li>
    ));
  };

  return <ul className="List">{displayContactInfo()}</ul>;
};

export default ContactContent;
