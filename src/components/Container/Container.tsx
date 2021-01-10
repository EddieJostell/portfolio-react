import React from 'react';

function Container(props: { children: React.ReactNode }) {
  return <div className="pt-20">{props.children}</div>;
}

export default Container;
