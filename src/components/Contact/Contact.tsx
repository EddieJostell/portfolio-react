import * as React from 'react';
import './Contact.scss';
import ContactContent from './ContactContent/ContactContent';

interface Props {}

interface State {}

export default class Contact extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="Contact">
        <h1>CONTACT ME</h1>
        <ContactContent />
      </div>
    );
  }
}
