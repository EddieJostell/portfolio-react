import * as React from 'react';
import './Home.scss';

interface Props {}

interface State {}

export default class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="Home">
        <div className="d-flex justify-content-center align-items-center">
          <div className="Home-content col-6">
            <span className="Home-contentTitle">WELCOME!</span>
            <span className="Home-contentText">
              This is my info and portfolio page. Created with #React.js
              #Typescript #CSS/LESS.
            </span>
          </div>
        </div>
      </div>
    );
  }
}
