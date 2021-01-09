import React from 'react';
import './Container.scss';

function Container(props: { children: React.ReactNode }) {
  return <div className="container-fluid">{props.children}</div>;
}

export default Container;
