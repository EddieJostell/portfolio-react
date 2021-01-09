import * as React from 'react';
import '../../Contact/Contact.scss';

interface Props {}

const ContactContent = (props: Props) => {
  return (
    <ul className="List">
      <li className="List-items">
        <div className="">
          <img src="Icons/phone-call.svg" />
        </div>
        <span>+46 73 026 30 92</span>
      </li>
      <li className="List-items">
        <div className="">
          <a href="mailto:eddie.jostell@gmail.com">
            <img src="Icons/mail.svg" />
          </a>
        </div>
        <a href="mailto:eddie.jostell@gmail.com">
          <h3>Email</h3>
        </a>
      </li>
      <li className="List-items">
        <div className="">
          <a href="https://www.linkedin.com/in/eddiejostell" target="_blank">
            <img src="Icons/linkedin.svg" />
          </a>
        </div>
        <a href="https://www.linkedin.com/in/eddiejostell" target="_blank">
          <h3>LinkedIn</h3>
        </a>
      </li>
      <li className="List-items">
        <div className="">
          <a href="https://github.com/EddieJostell" target="_blank">
            <img src="Icons/github.svg" />
          </a>
        </div>
        <a href="https://github.com/EddieJostell" target="_blank">
          <h3>Github</h3>
        </a>
      </li>
    </ul>
  );
};

export default ContactContent;
