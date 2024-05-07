import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { menu, close, github } from '../assets';

const Navbar = () => {
  const [activate, setActivate] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActivate('');
            window.scrollTo(0, 0);
          }}
        >
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Matheus Silva&nbsp;
            <span className="lg:block hidden">| Software Engineer</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10 items-center">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                activate === link.title
                  ? 'text-white'
                  : 'text-secondary'
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActivate(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
          <li key="github">
            <img
              src={github}
              alt="github"
              onClick={() => window.open('https://www.github.com/math-silva', '_blank')}
              className="w-8 h-8 cursor-pointer opacity-80 hover:opacity-100"
            />
          </li>
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className="list-none flex justify-end items-start flex-col gap-4">

              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    activate === link.title
                      ? 'text-white'
                      : 'text-gray-300'
                  } hover:text-white font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setActivate(link.title);
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
              <li key="github">
                <div
                  onClick={() => window.open('https://www.github.com/math-silva', '_blank')}
                  className="flex items-center gap-1 group cursor-pointer"
                >
                  <img
                    src={github}
                    alt="github"
                    className="w-8 h-8 opacity-80 group-hover:opacity-100"
                  />
                  <p className="text-gray-300 group-hover:text-white text-sm font-semibold">/math-silva</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
