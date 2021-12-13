import React from 'react';

export interface IContainerProps {}

function Container(props: { children: React.ReactNode }) {
  return (
    <div className='container md:h-screen pt-20 mx-auto'>{props.children}</div>
  );
}

export default Container;
