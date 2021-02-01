import * as React from 'react';
import ContactContent from './ContactContent/ContactContent';

interface IContactProps {}

const Contact = (props: IContactProps) => {
  return (
    <div className="flex flex-col items-center w-full h-full px-5 text-white">
      <div className="p-10 pt-0 mt-32 rounded-md shadow-2xl">
        <h1 className="mt-8 text-5xl text-center">CONTACT ME</h1>
      </div>
      <ContactContent />
    </div>
  );
};

export default Contact;
