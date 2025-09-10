import './Contact.scss';
import { FC } from 'react';

interface IContactProps {}

export const Contact: FC<IContactProps> = () => {
  return (
    <div className='Contact' id='contact'>
      <div className='Contact-title'>
        <h1>CONTACT ME</h1>
      </div>
    </div>
  );
};
