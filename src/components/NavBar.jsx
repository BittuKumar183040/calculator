import React from 'react';
import ThemeSwithButton from './ThemeSwithButton';

const NavBar = () => {
  return (
    <div className=" dark:text-white flex justify-between gap-2 p-2 absolute w-full items-center">
      <div className="flex items-center gap-2 cursor-pointer">
        <img src="./logo.svg" />
        <p className=" font-bold text-blue-700">
          Calc
          <span className=" text-yellow-400">.</span>
        </p>
      </div>
      <ThemeSwithButton />
    </div>
  );
};

export default NavBar;
