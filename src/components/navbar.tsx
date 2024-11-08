import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

import { Logs , X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="z-10 flex items-center justify-between px-5 py-5 lg:px-20">
      {/* Logo */}
      <div className="text-2xl font-bold ">
        <span className="text-black">TERRA</span><br/>
        <span className="bg-gradient-to-r from-[#EF3D00] to-[#FDA40A] bg-clip-text text-transparent">CODE.</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden px-8 py-4 space-x-6 bg-gray-100 rounded-xl md:flex">
        <Link to={"/"} className="text-gray-600 cursor-pointer hover:text-orange-600">Home</Link>
        <ScrollLink to="services" smooth={true} duration={500} className="text-gray-600 cursor-pointer hover:text-orange-600">
          Services
        </ScrollLink>
        <ScrollLink to="about" smooth={true} duration={500} className="text-gray-600 cursor-pointer hover:text-orange-600">
          About
        </ScrollLink>
        <ScrollLink to="work" smooth={true} duration={500} className="text-gray-600 cursor-pointer hover:text-orange-600">
          Work
        </ScrollLink>
        <ScrollLink to="projects" smooth={true} duration={500} className="text-gray-600 cursor-pointer hover:text-orange-600">
          Tech Stack
        </ScrollLink>
        <ScrollLink to="faqs" smooth={true} duration={500} className="text-gray-600 cursor-pointer hover:text-orange-600">
          FAQs
        </ScrollLink>
      </div>

      {/* Contact Us Button */}
      <div className="hidden md:flex">
        <ScrollLink to="contact" smooth={true} duration={500} className="px-4 py-2 text-white bg-gradient-to-r from-[#EF3D00] to-[#FDA40A] cursor-pointer rounded-3xl hover:text-gray-950">
          Contact Us
        </ScrollLink>
      </div>

      {/* Mobile Menu Button */}
      <button onClick={toggleMenu} className=" md:hidden">
        {menuOpen ? <X /> : <div className='flex items-center gap-4 p-4 bg-gray-100 rounded-xl'><Logs /></div>}
      </button>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute left-0 flex flex-col items-center w-full p-5 space-y-4 bg-white top-20 md:hidden">
          <ScrollLink to="services" smooth={true} duration={500} className="text-gray-600 cursor-pointer hover:text-orange-600" onClick={toggleMenu}>
            Services
          </ScrollLink>
          <ScrollLink to="about" smooth={true} duration={500} className="text-gray-600 cursor-pointer hover:text-orange-600" onClick={toggleMenu}>
            About
          </ScrollLink>
          <ScrollLink to="work" smooth={true} duration={500} className="text-gray-600 cursor-pointer hover:text-orange-600" onClick={toggleMenu}>
            Work
          </ScrollLink>
          <ScrollLink to="benefits" smooth={true} duration={500} className="text-gray-600 cursor-pointer hover:text-orange-600" onClick={toggleMenu}>
            Benefits
          </ScrollLink>
          <ScrollLink to="faqs" smooth={true} duration={500} className="text-gray-600 cursor-pointer hover:text-orange-600" onClick={toggleMenu}>
            FAQs
          </ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500} className="text-gray-600 cursor-pointer hover:text-orange-600" onClick={toggleMenu}>
            Contact
          </ScrollLink>

          {/* Contact Us Button in mobile viwe */}
          <ScrollLink to="contact" smooth={true} duration={500} className="px-10 py-2 text-white bg-gradient-to-r from-[#EF3D00] to-[#FDA40A] cursor-pointer rounded-xl hover:bg-gray-800" onClick={toggleMenu}>
            Contact Us
          </ScrollLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;