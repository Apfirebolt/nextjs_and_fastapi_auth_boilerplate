'use client';

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuItems, setMenuItems] = useState([
    { name: 'Login', link: '/login' },
    { name: 'Register', link: '/register' },
  ]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeOnClickOutside = (e) => {
    if (isOpen && !e.target.closest('.fixed')) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', closeOnClickOutside);
    return () => {
      document.removeEventListener('click', closeOnClickOutside);
    };
  }, [isOpen]);

  return (
    <header className="bg-primary text-accent">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl w-1/2 p-5 font-bold flex items-center">
          <Link href="/">Next Fast Auth</Link>
          <FaBars className="text-2xl ml-auto cursor-pointer sm:hidden" onClick={toggleMenu} />
        </h1>
        <nav className="w-1/2 p-5 hidden sm:block">
          <ul className="flex space-x-4">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.link}
                  className="px-2 py-3 hover:bg-secondary hover:text-accent transition-all duration-300 shadow rounded"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 z-40 h-full bg-primary text-accent w-1/2 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 sm:hidden`}
      >
        <div className="p-5 flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            <Link href="/">Next Auth</Link>
          </h1>
          <FaTimes className="text-2xl cursor-pointer" onClick={toggleMenu} />
        </div>
        <ul className="space-y-4 p-5">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.link}
                className="block px-2 py-3 hover:bg-secondary hover:text-accent transition-all duration-300 shadow rounded"
                onClick={toggleMenu}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
