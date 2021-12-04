import * as React from 'react';
import iconMail from '../../../Icons/mail.svg';
import iconPhone from '../../../Icons/phone-call.svg';
import iconLinkedIn from '../../../Icons/linkedin.svg';
import iconGitHub from '../../../Icons/github.svg';
/* import iconInsta from '../../../Icons/instagram.svg';*/

interface Props {}

const ContactContent = (props: Props) => {
  return (
    <ul className="flex flex-col items-center justify-between w-full mt-12 md:flex-row md:mt-24 md:justify-around">
      <li className="flex flex-col items-center justify-center w-48 h-48 rounded-md shadow-2xl">
        <div className="">
          <img alt="phone" className="w-12 h-12" src={iconPhone} />
        </div>
        <span>+46 73 026 30 92</span>
      </li>
      <li className="flex flex-col items-center justify-center w-48 h-48 border-white rounded-md shadow-2xl">
        <div className="">
          <a href="mailto:eddie.jostell@gmail.com">
            <img alt="mail" className="w-12 h-12" src={iconMail} />
          </a>
        </div>
        <a
          className="active:text-white hover:text-orange hover:underline"
          href="mailto:eddie.jostell@gmail.com"
        >
          <h3>Email</h3>
        </a>
      </li>
      <li className="flex flex-col items-center justify-center w-48 h-48 border-white rounded-md shadow-2xl">
        <div className="">
          <a
            className="active:text-white hover:text-orange hover:underline"
            href="https://www.linkedin.com/in/eddiejostell"
            target="_blank"
            rel="noreferrer"
          >
            <img alt="linkedin" className="w-12 h-12" src={iconLinkedIn} />
          </a>
        </div>
        <a
          className="active:text-white hover:text-orange hover:underline"
          href="https://www.linkedin.com/in/eddiejostell"
          target="_blank"
          rel="noreferrer"
        >
          <h3>LinkedIn</h3>
        </a>
      </li>
      <li className="flex flex-col items-center justify-center w-48 h-48 border-white rounded-md shadow-2xl">
        <div className="">
          <a
            className="active:text-white hover:text-orange hover:underline"
            href="https://github.com/EddieJostell"
            target="_blank"
            rel="noreferrer"
          >
            <img alt="github" className="w-12 h-12" src={iconGitHub} />
          </a>
        </div>
        <a
          className="active:text-white hover:text-orange hover:underline"
          href="https://github.com/EddieJostell"
          target="_blank"
          rel="noreferrer"
        >
          <h3>Github</h3>
        </a>
      </li>
    </ul>
  );
};

export default ContactContent;
