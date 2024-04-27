import React, { useState } from 'react';
import { FaBagShopping, FaBook, FaCartShopping, FaMugHot } from 'react-icons/fa6'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`bg-[#191a1e] text-2xl font-medium  text-[#fff] fixed top-0 w-full  ${// Choose either method
      isOpen ? '' : 'bg-opacity-55' // Method 1 (Tailwind)
      // OR
      // 'my-navbar' // Method 2 (Custom CSS)
    }`}> {/* Update class based on method */}
      <div className="container mx-auto flex justify-between items-center py-2 h-[100px] ">
        {/* Logo */}
        <a href="#" className="text-xl font-bold font-dancingScript">Coffee Cafe</a>

        {/* Navigation links (desktop) */}
        <div className="hidden md:flex space-x-4">
          <a href="/Hero" className="hover:text-[#934B24]">Home</a>
          <a href="/Menu" className="hover:text-[#934B24]">Menu</a>
          <a href="#" className="hover:text-[#934B24]">Contact</a>
          
          <a href="#" className="hover:text-[#934B24] hover:scale-105 duration-300"><FaMugHot/></a>
        </div>

        {/* Hamburger menu button (mobile) */}
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          {isOpen ? (
           <button><FaBook/></button>
          ) : (
            <button><FaBook/></button>
          )}
        </button>
      </div>

      {/* Mobile navigation menu */}
      {isOpen && (
        <div className="md:hidden absolute bg-[#E2A5B3] w-full py-4  px-4">
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-[#B93622] hover:text-[#4B1E20] block px-4 py-2">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-[#B93622] hover:text-[#4B1E20] block px-4 py-2">
                Menu
              </a>
            </li>
            <li>
              <a href="#" className="text-[#B93622] hover:text-[#4B1E20] block px-4 py-2">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="text-[#B93622] hover:text-[#4B1E20] block px-4 py-2">
                <FaCartShopping/>
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
