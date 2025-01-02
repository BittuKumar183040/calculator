import React from 'react';
import ThemeSwithButton from './ThemeSwithButton';
import { CiCalculator2 } from 'react-icons/ci';

const NavBar = () => {
  return (
    <div className=" dark:text-white flex justify-between gap-2 p-2 absolute w-full z-50 items-center">
      <div className="flex items-center gap-2 cursor-pointer">
        <CiCalculator2 size={20} className=" text-blue-700" />
        <p className=" font-bold text-blue-700">
          Calc<span className=" text-yellow-400">.</span>
        </p>
      </div>
      <ThemeSwithButton />
    </div>
  );
};

export default NavBar;
