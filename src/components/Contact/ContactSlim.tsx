import * as React from 'react';
import { IContactItem } from '../../utils/data';
import { HelperContext, IContextState } from '../../utils/HelperContext';
import { isMobileMax } from '../../utils/userAgent';
import './ContactSlim.scss';

interface IContactSlimProps {}

export const ContactSlim = (props: IContactSlimProps) => {
  const contactInfo = React.useContext<IContextState>(HelperContext);

  const displayContactInfo = () => {
    return contactInfo.contactItem.map((tact: IContactItem, key: number) => (
      <div key={key} className="ContactSlim-icons">
        <a href={tact.link} target="_blank" rel="noreferrer">
          <img alt={tact.title} src={tact.iconSrc} />
        </a>
      </div>
    ));
  };

  return (
    <div
      className={
        isMobileMax ? 'ContactSlim' : 'ContactSlim ContactSlim--mobile'
      }
    >
      {displayContactInfo()}
    </div>
  );
};
