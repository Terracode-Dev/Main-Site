import React, { useState, useEffect, useRef } from "react";
import { Link as ScrollLink } from "react-scroll";
import ContactForm from "./contactus/Contact";
import { Logs, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [closing, setClosing] = useState(false);

  const toggleMenu = () => {
    if (menuOpen) {
      setClosing(true);
      setTimeout(() => {
        setMenuOpen(false);
        setClosing(false);
      }, 300); // Match this duration with the animation duration
    } else {
      setMenuOpen(true);
    }
  };

  const closeMenu = () => {
    if (menuOpen) {
      setClosing(true);
      setTimeout(() => {
        setMenuOpen(false);
        setClosing(false);
      }, 300); // Match this duration with the animation duration
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };

    if (menuOpen) {
      // Listen for both mouse and touch events
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav className="z-10 flex items-center justify-between px-5 py-5 lg:px-20 relative w-full">
      {/* Logo */}
      <div className="flex flex-col -space-y-2 text-xl font-bold md:text-2xl">
        <span className="text-black">TERRA</span>
        <span className="bg-gradient-to-r from-[#EF3D00] to-[#FDA40A] bg-clip-text text-transparent">
          CODE.
        </span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden px-8 py-4 space-x-6 bg-gray-100 rounded-xl md:flex">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <ScrollLink
          to="services"
          smooth={true}
          duration={500}
          className="nav-link"
        >
          Services
        </ScrollLink>
        <ScrollLink
          to="about"
          smooth={true}
          duration={500}
          className="nav-link"
        >
          About
        </ScrollLink>
        <ScrollLink
          to="work"
          smooth={true}
          duration={500}
          className="nav-link"
        >
          Work
        </ScrollLink>
        <ScrollLink
          to="projects"
          smooth={true}
          duration={500}
          className="nav-link"
        >
          Tech Stack
        </ScrollLink>
        <ScrollLink
          to="faqs"
          smooth={true}
          duration={500}
          className="nav-link"
        >
          FAQs
        </ScrollLink>
      </div>

      {/* Contact Us Button */}
      <div className="hidden md:flex">
        <button
          className="relative py-2 mt-4 font-medium rounded-full px-7 group overflow-hidden
          text-white bg-black hover:bg-transparent
          before:absolute before:inset-0
          before:bg-gradient-to-r before:from-[#EF3D00] before:to-[#FDA40A]
          before:opacity-0 before:transition-opacity before:duration-300
          hover:before:opacity-100
          hover:shadow-lg hover:shadow-[#EF3D00]/50
          transition-all duration-300
          hover:scale-110 active:scale-95
          opacity-0 translate-y-12
          animate-[fadeIn_0.8s_ease-in-out_0.5s_forwards]
          items-center"
          onClick={() => setIsContactFormOpen(true)}
        >
          <span className="relative z-10 inter">Talk with Us</span>
        </button>
      </div>
      <ContactForm
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
      />

      {/* Mobile Menu Button */}
      <button onClick={toggleMenu} className="md:hidden">
        {menuOpen ? (
          <X />
        ) : (
          <div className="flex items-center gap-4 p-4 bg-gray-100 rounded-xl">
            <Logs />
          </div>
        )}
      </button>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div
          ref={mobileMenuRef}
          className={`absolute left-0 z-[150] flex flex-col items-center w-full h-[500px] p-5 space-y-4 bg-white top-20 md:hidden
          ${closing ? "animate-smoothSlideUp" : "animate-fadeSlideDown"}`}
        >
          <Link
            to="/"
            className="text-gray-600 cursor-pointer hover:text-orange-600"
            onClick={closeMenu}
          >
            Home
          </Link>
          <ScrollLink
            to="services"
            smooth={true}
            duration={500}
            className="text-gray-600 cursor-pointer hover:text-orange-600"
            onClick={closeMenu}
          >
            Services
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            className="text-gray-600 cursor-pointer hover:text-orange-600"
            onClick={closeMenu}
          >
            About
          </ScrollLink>
          <ScrollLink
            to="work"
            smooth={true}
            duration={500}
            className="text-gray-600 cursor-pointer hover:text-orange-600"
            onClick={closeMenu}
          >
            Work
          </ScrollLink>
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            className="text-gray-600 cursor-pointer hover:text-orange-600"
            onClick={closeMenu}
          >
            Tech Stack
          </ScrollLink>
          <ScrollLink
            to="qa"
            smooth={true}
            duration={500}
            className="text-gray-600 cursor-pointer hover:text-orange-600"
            onClick={closeMenu}
          >
            FAQ
          </ScrollLink>

          {/* Contact Us Button in mobile view */}
          <button
            onClick={() => {
              setIsContactFormOpen(true);
              closeMenu();
            }}
            className="px-4 py-2 text-white bg-gradient-to-r from-[#EF3D00] to-[#FDA40A] cursor-pointer rounded-3xl hover:text-gray-950 z-20"
          >
            Talk with Us
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
