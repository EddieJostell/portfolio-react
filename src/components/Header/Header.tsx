import classNames from 'classnames';
import React, { FunctionComponent } from 'react';
import './Header.scss';

export interface IHeaderProps {
  children?: React.ReactNode;
  title?: string;
  size: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

  className?: string;

  fullWidth?: boolean;

  textCenter?: boolean;

  color?: boolean;
}

export const Header: FunctionComponent<IHeaderProps> = (
  props: IHeaderProps
): JSX.Element => {
  const { title, size, className, fullWidth, textCenter, color } = props;

  let headerClasses = classNames(
    'Header',
    {
      fullWidth: fullWidth,
      textCenter: textCenter,
      Color: color,
    },
    className
  );

  const renderTitle = () => {
    switch (size) {
      case 'h1':
        return <h1>{title}</h1>;
      case 'h2':
        return <h2>{title}</h2>;
      case 'h3':
        return <h3>{title}</h3>;
      case 'h4':
        return <h4>{title}</h4>;
      case 'h5':
        return <h5>{title}</h5>;
      case 'h6':
        return <h6>{title}</h6>;
      default:
        return <h1>{title}</h1>;
    }
  };

  return <div className={headerClasses}>{renderTitle()}</div>;
};
