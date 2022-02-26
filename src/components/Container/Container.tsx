import React from 'react';
import './Container.scss';

export interface IContainerProps {}

export function Container(props: { children: React.ReactNode }) {
  return (
    <div className="Container" data-testid="container">
      {props.children}
    </div>
  );
}
