import React from 'react';

export interface IContainerProps {}

function Container(props: { children: React.ReactNode }) {
  return (
    <div
      className="container pt-20 mx-auto md:h-screen"
      data-testid="container"
    >
      {props.children}
    </div>
  );
}

export default Container;
