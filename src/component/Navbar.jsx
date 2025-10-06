import { useState } from 'react';
import { useScroll, motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const { scrollYProgress } = useScroll();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navLinks = [
    { to: "home", label: "Home" },
    { to: "about", label: "About me" },
    { to: "resume", label: "Resume" },
    { to: "portfolio", label: "Portfolio" },
    { to: "contact", label: "Contact" }
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-emerald-400 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />
      <nav className="bg-[#0F0F0F] text-white px-6 py-4 fixed top-0 left-0 right-0 z-40 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-emerald-400">Horn Bunlong</h1>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-8 text-gray-300">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={1000}
                  spy={true}
                  offset={-70}
                  activeClass="text-emerald-400 border-b-2 border-emerald-400"
                  className="cursor-pointer hover:text-emerald-400 transition relative px-2 py-1"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMobileMenu}
              className="text-gray-300 hover:text-emerald-400 focus:outline-none"
            >
              {mobileMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
          
          {/* Desktop Hire Me Button */}
          {/* <button className="hidden md:block bg-orange-500 px-5 py-2 rounded text-white font-semibold hover:bg-orange-600 transition">
            Hire Me
          </button> */}
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0F0F0F] py-4 px-6"
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={1000}
                    spy={true}
                    offset={-70}
                    activeClass="text-emerald-400"
                    className="block py-2 text-gray-300 hover:text-emerald-400 transition"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {/* <li>
                <button className="w-full bg-orange-500 px-5 py-2 rounded text-white font-semibold hover:bg-orange-600 transition">
                  Hire Me
                </button>
              </li> */}
            </ul>
          </motion.div>
        )}
      </nav>
    </>
  );
}