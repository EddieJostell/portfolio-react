import React from 'react';
import { Link } from 'react-router-dom';
import iconX from '../Icons/x.svg';
import iconMenu from '../Icons/menu.svg';

interface INavProps {
  name: string;
  navIsOpen: boolean;
  toggleNav: (visible: boolean) => void;
  status?: string;
}

const defaultProps: Partial<INavProps> = {
  status: '12315',
};

const Navigation = (props: INavProps) => {
  const { name, navIsOpen, toggleNav } = props;

  return (
    <>
      <div className="sticky top-0 left-0 z-50 flex flex-row items-center justify-between w-full px-1 py-1 bg-black text-orange">
        <div className="z-20 text-base sm:text-2xl">
          <a>{name}</a>
        </div>
        <div className="z-20 flex justify-end">
          {navIsOpen ? (
            <div onClick={() => toggleNav(false)}>
              <img className="w-6 h-6 cursor-pointer sm:w-8 h-9" src={iconX} />
            </div>
          ) : (
            <div onClick={() => toggleNav(true)}>
              <img
                className="w-6 h-6 cursor-pointer sm:w-8 h-9"
                src={iconMenu}
              />
            </div>
          )}
        </div>
      </div>
      {navIsOpen && (
        <div className="top-0 right-0 z-10 w-full min-h-screen bg-black opacity-90 aboslute">
          <div className="flex flex-col items-center justify-center pt-56 border-4 border-red-500 border-opacity-100 md:pt-72 lg:pt-80 ">
            <li className="m-4 list-none cursor-pointer">
              <Link
                className="font-sans text-3xl text-white list-none cursor-pointer"
                to={'/'}
                onClick={() => toggleNav(false)}
              >
                {' '}
                ABOUT{' '}
              </Link>
            </li>
            <li className="m-4 list-none cursor-pointer">
              <Link
                className="font-sans text-3xl text-white list-none cursor-pointer"
                to={'/Portfolio'}
                onClick={() => toggleNav(false)}
              >
                {' '}
                PORTFOLIO{' '}
              </Link>
            </li>
            <li className="m-4 list-none cursor-pointer">
              <Link
                className="font-sans text-3xl text-white list-none cursor-pointer"
                to={'/Contact'}
                onClick={() => toggleNav(false)}
              >
                {' '}
                CONTACT{' '}
              </Link>
            </li>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;

Navigation.defaultProps = defaultProps;
