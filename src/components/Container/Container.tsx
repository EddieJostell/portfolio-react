import React from 'react';

export interface IContainerProps {}

function Container(props: { children: React.ReactNode }) {
  return (
    <div className="container pt-20 mx-auto" data-testid="container">
      {props.children}
    </div>
  );
}

export default Container;
