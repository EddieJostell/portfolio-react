import React, { FunctionComponent } from 'react';

export interface IHeaderProps {
  children?: React.ReactNode;
  title?: string;
  size: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const Header: FunctionComponent<IHeaderProps> = (
  props: IHeaderProps
): JSX.Element => {
  const { title, size } = props;

  const renderTitle = () => {
    switch (size) {
      case 'h1':
        return <h1>{title}</h1>;
        break;
      case 'h2':
        return <h2>{title}</h2>;
        break;
      case 'h3':
        return <h3>{title}</h3>;
        break;
      case 'h4':
        return <h4>{title}</h4>;
        break;
      case 'h5':
        return <h5>{title}</h5>;
        break;
      case 'h6':
        return <h6>{title}</h6>;
        break;
      default:
        return <h1>{title}</h1>;
    }
  };

  return <div className='header'>{renderTitle()}</div>;
};
