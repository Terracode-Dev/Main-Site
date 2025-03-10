import React, { useState, useEffect, useRef } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../App.css';
import { X } from 'lucide-react';

interface NavbarProps {
  setIsContactFormOpen: (isOpen: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setIsContactFormOpen }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  const location = useLocation();
  const navigate = useNavigate();

  // Scroll and active section effect
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Navbar visibility logic
      if (window.innerWidth >= 200) {
        if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
          setIsVisible(false);
        } else if (currentScrollY < lastScrollY.current) {
          setIsVisible(true);
        }
        lastScrollY.current = currentScrollY;
      }

      // Active section determination
      const sections = ['hero', 'services', 'about', 'work', 'projects', 'qa'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const elementTop = element.offsetTop;
          const elementHeight = element.offsetHeight;

          if (scrollPosition >= elementTop && scrollPosition < elementTop + elementHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Set active section based on URL when component mounts or URL changes
  useEffect(() => {
    const path = location.pathname;
    const hash = location.hash.replace('#', '');

    if (path === '/') {
      // If we're on the home page, check for hash or default to 'hero'
      setActiveSection(hash || 'hero');

      // If there's a hash, scroll to that section
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    } else if (path === '/digitalportfolio') {
      setActiveSection('digital-portfolio');
    }
  }, [location]);

  // Helper function to determine nav link classes
  const getNavLinkClass = (sectionName: string) => {
    // Special case for Tech Stack tab which should highlight when 'projects' is active
    if (sectionName === 'tech-stack' && activeSection === 'projects') {
      return 'nav-link text-orange-600 font-bold';
    }

    return `
      nav-link 
      ${activeSection === sectionName
        ? 'text-orange-600 font-bold'
        : 'text-gray-600 hover:text-black hover:font-semibold'}
    `;
  };

  // Handle navigation for sections that require page changes
  const handleNavigation = (sectionName: string) => {
    closeMenu();

    if (sectionName === 'hero') {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('hero');
    } else if (sectionName === 'digital-portfolio') {
      navigate('/digitalportfolio');
      setActiveSection('digital-portfolio');
    } else if (sectionName === 'tech-stack') {
      // If tech stack is really pointing to the projects section on the home page
      if (location.pathname === '/') {
        // If already on home page, just scroll to projects section
        const element = document.getElementById('projects');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setActiveSection('projects');
        }
      } else {
        // Navigate to home page with projects hash
        navigate('/#projects');

        // Give time for navigation to complete before scrolling
        setTimeout(() => {
          const element = document.getElementById('projects');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection('projects');
          }
        }, 100);
      }
    } else if (location.pathname !== '/') {
      // If we need to go to a section on the home page but we're not there yet
      navigate(`/#${sectionName}`);

      // Give time for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionName);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setActiveSection(sectionName);
        }
      }, 100);
    } else {
      // For other sections when already on home page
      setActiveSection(sectionName);
    }
  };

  // Handle opening contact form with proper z-index management
  const handleOpenContactForm = () => {
    // First close the menu if it's open to prevent z-index conflicts
    if (menuOpen) {
      closeMenu();
    }

    // Add a small delay to ensure menu closing animation completes
    setTimeout(() => {
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
      setIsContactFormOpen(true);
    }, 50);
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  return (
    <nav
      className={`
        flex items-center justify-between px-5 py-5 lg:px-20 
        fixed top-0 left-0 right-0 
        transition-transform duration-300 
        ${isVisible ? 'translate-y-0' : '-translate-y-full'}
        bg-white
      `}
      style={{
        zIndex: 40, // Lower z-index to ensure contact form appears above
      }}
    >
      {/* Logo */}
      <button
        className="flex flex-col -space-y-2 text-xl font-bold md:text-2xl"
        onClick={() => {
          navigate('/');
          window.scrollTo({ top: 0, behavior: 'smooth' });
          setActiveSection('hero');
        }}
      >
        <span className="text-black">TERRA</span>
        <span className="bg-gradient-to-r from-[#EF3D00] to-[#FDA40A] bg-clip-text text-transparent">CODE.</span>
      </button>

      {/* Desktop Menu */}
      <div className="hidden px-8 py-4 space-x-6 backdrop-blur-sm bg-gray-100/70 rounded-xl md:flex">
        <button
          className={getNavLinkClass('hero')}
          onClick={() => handleNavigation('hero')}
        >
          Home
        </button>

        {location.pathname === '/' ? (
          // If on home page, use ScrollLink for smooth scrolling
          <>
            <ScrollLink
              to="services"
              smooth={true}
              duration={500}
              className={getNavLinkClass('services')}
              onClick={() => setActiveSection('services')}
            >
              Services
            </ScrollLink>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              className={getNavLinkClass('about')}
              onClick={() => setActiveSection('about')}
            >
              About
            </ScrollLink>
            <ScrollLink
              to="work"
              smooth={true}
              duration={500}
              className={getNavLinkClass('work')}
              onClick={() => setActiveSection('work')}
            >
              Work
            </ScrollLink>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              className={getNavLinkClass('tech-stack')}
              onClick={() => setActiveSection('projects')}
            >
              Tech Stack
            </ScrollLink>
            <button
              className={getNavLinkClass('digital-portfolio')}
              onClick={() => handleNavigation('digital-portfolio')}
            >
              Projects
            </button>
            <ScrollLink
              to="qa"
              smooth={true}
              duration={500}
              className={getNavLinkClass('qa')}
              onClick={() => setActiveSection('qa')}
            >
              FAQs
            </ScrollLink>
          </>
        ) : (
          // If not on home page, use navigation with URL hash
          <>
            <button
              className={getNavLinkClass('services')}
              onClick={() => handleNavigation('services')}
            >
              Services
            </button>
            <button
              className={getNavLinkClass('about')}
              onClick={() => handleNavigation('about')}
            >
              About
            </button>
            <button
              className={getNavLinkClass('work')}
              onClick={() => handleNavigation('work')}
            >
              Work
            </button>
            <button
              className={getNavLinkClass('tech-stack')}
              onClick={() => handleNavigation('tech-stack')}
            >
              Tech Stack
            </button>
            <button
              className={getNavLinkClass('digital-portfolio')}
              onClick={() => handleNavigation('digital-portfolio')}
            >
              Projects
            </button>
            <button
              className={getNavLinkClass('qa')}
              onClick={() => handleNavigation('qa')}
            >
              FAQs
            </button>
          </>
        )}
      </div>

      {/* Contact Us Button */}
      <div className="hidden md:flex">
        <button
          className="relative py-2 mt-4 font-medium rounded-full px-7 group overflow-hidden
            text-orange-500 bg-black hover:bg-transparent
            before:absolute before:inset-0
            before:bg-gradient-to-r before:from-[#EF3D00] before:to-[#FDA40A]
            before:opacity-0 before:transition-opacity before:duration-300
            hover:before:opacity-100
            hover:shadow-lg hover:shadow-[#EF3D00]/50
            transition-all duration-300
            hover:scale-110 active:scale-95
            items-center"
          onClick={handleOpenContactForm}
        >
          <span className="relative z-10 inter transition-colors duration-300 group-hover:text-white">
            Talk with Us
          </span>
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button onClick={toggleMenu} className="md:hidden">
        {menuOpen ? <X /> : <div className="flex items-center gap-4 p-4 bg-gray-100 rounded-xl">
          <span className="bg-gradient-to-r from-[#EF3D00] to-[#FDA40A] bg-clip-text text-transparent font-bold">Home</span>
          <img src='dot.png' alt="menu dot" />
        </div>}
      </button>

      {/* Mobile Dropdown Menu */}
      <div
        ref={mobileMenuRef}
        className={`
          fixed left-0 flex flex-col items-center w-full h-[500px] p-5 space-y-4 bg-white top-20 md:hidden
          transform transition-all duration-500 ease-in-out
          ${menuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}
        `}
        style={{
          pointerEvents: menuOpen ? 'auto' : 'none',
          zIndex: 30, // Lower than contact form but higher than page content
        }}
      >
        <button
          className={`cursor-pointer transition-all duration-300 ${activeSection === 'hero' ? 'active-nav-link' : ''}`}
          onClick={() => handleNavigation('hero')}
        >
          Home
        </button>

        {location.pathname === '/' ? (
          // If on home page, use ScrollLink for mobile menu
          <>
            <ScrollLink
              to="services"
              smooth={true}
              duration={500}
              className={`cursor-pointer transition-all duration-300 ${activeSection === 'services' ? 'active-nav-link' : ''}`}
              onClick={() => {
                setActiveSection('services');
                closeMenu();
              }}
            >
              Services
            </ScrollLink>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              className={`cursor-pointer transition-all duration-300 ${activeSection === 'about' ? 'active-nav-link' : ''}`}
              onClick={() => {
                setActiveSection('about');
                closeMenu();
              }}
            >
              About
            </ScrollLink>
            <ScrollLink
              to="work"
              smooth={true}
              duration={500}
              className={`cursor-pointer transition-all duration-300 ${activeSection === 'work' ? 'active-nav-link' : ''}`}
              onClick={() => {
                setActiveSection('work');
                closeMenu();
              }}
            >
              Work
            </ScrollLink>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              className={`cursor-pointer transition-all duration-300 ${activeSection === 'projects' ? 'active-nav-link' : ''}`}
              onClick={() => {
                setActiveSection('projects');
                closeMenu();
              }}
            >
              Tech Stack
            </ScrollLink>
            <button
              className={`cursor-pointer transition-all duration-300 ${activeSection === 'digital-portfolio' ? 'active-nav-link' : ''}`}
              onClick={() => handleNavigation('digital-portfolio')}
            >
              Projects
            </button>
            <ScrollLink
              to="qa"
              smooth={true}
              duration={500}
              className={`cursor-pointer transition-all duration-300 ${activeSection === 'qa' ? 'active-nav-link' : ''}`}
              onClick={() => {
                setActiveSection('qa');
                closeMenu();
              }}
            >
              FAQs
            </ScrollLink>
          </>
        ) : (
          // If not on home page, use navigation with URL hash for mobile menu
          <>
            <button
              className={`cursor-pointer transition-all duration-300 ${activeSection === 'services' ? 'active-nav-link' : ''}`}
              onClick={() => handleNavigation('services')}
            >
              Services
            </button>
            <button
              className={`cursor-pointer transition-all duration-300 ${activeSection === 'about' ? 'active-nav-link' : ''}`}
              onClick={() => handleNavigation('about')}
            >
              About
            </button>
            <button
              className={`cursor-pointer transition-all duration-300 ${activeSection === 'work' ? 'active-nav-link' : ''}`}
              onClick={() => handleNavigation('work')}
            >
              Work
            </button>
            <button
              className={`cursor-pointer transition-all duration-300 ${activeSection === 'tech-stack' || activeSection === 'projects' ? 'active-nav-link' : ''}`}
              onClick={() => handleNavigation('tech-stack')}
            >
              Tech Stack
            </button>
            <button
              className={`cursor-pointer transition-all duration-300 ${activeSection === 'digital-portfolio' ? 'active-nav-link' : ''}`}
              onClick={() => handleNavigation('digital-portfolio')}
            >
              Projects
            </button>
            <button
              className={`cursor-pointer transition-all duration-300 ${activeSection === 'qa' ? 'active-nav-link' : ''}`}
              onClick={() => handleNavigation('qa')}
            >
              FAQs
            </button>
          </>
        )}

        <button
          onClick={handleOpenContactForm}
          className="px-4 py-2 text-white bg-gradient-to-r from-[#EF3D00] to-[#FDA40A] cursor-pointer rounded-3xl hover:text-gray-950 transition-all duration-300"
        >
          Talk with Us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;