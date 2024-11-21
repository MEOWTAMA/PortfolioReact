import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white py-4 px-8 fixed w-full top-0 z-50 shadow-md">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        
        {/* Mobile Menu Toggle */}
        <button
          className="sm:hidden text-xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
        
        {/* Menu Links */}
        <ul
          className={`sm:flex space-x-8 absolute sm:relative bg-gray-900 sm:bg-transparent w-full sm:w-auto ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <li>
            <a href="#home" className="block py-2 hover:text-blue-400">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="block py-2 hover:text-blue-400">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="block py-2 hover:text-blue-400">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="block py-2 hover:text-blue-400">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
