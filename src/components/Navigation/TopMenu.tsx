import React from 'react';

interface ITopMenuProps {
  name: string;
  navIsOpen: boolean;
  toggleNav: (visible: boolean) => void;
  status?: string;
  iconX: string;
  iconMenu: string;
}

const TopMenu = (props: ITopMenuProps) => {
  const { name, navIsOpen, toggleNav, iconMenu, iconX } = props;
  return (
    <div className="fixed top-0 left-0 z-50 flex flex-row items-center w-full h-20 px-2 bg-black text-orange">
      <div className="container px-5 mx-auto">
        <div className="flex flex-row items-center justify-between">
          <div className="z-20 text-base sm:text-2xl">
            <span>{name}</span>
          </div>
          <div className="z-20 flex justify-end">
            {navIsOpen ? (
              <div onClick={() => toggleNav(false)}>
                <img
                  alt="close"
                  className="w-6 h-6 cursor-pointer sm:w-8 sm:h-8"
                  src={iconX}
                />
              </div>
            ) : (
              <div onClick={() => toggleNav(true)}>
                <img
                  alt="menu"
                  className="w-6 h-6 cursor-pointer sm:w-8 sm:h-8"
                  src={iconMenu}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopMenu;

//Change the navbar to house the links at the top for desktop
//then have them hidden with hamburger for phone size.
