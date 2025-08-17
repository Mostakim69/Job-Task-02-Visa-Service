import React, { useState } from "react";
import { FaBars, FaTimes, FaPassport } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" }, // Smooth scroll link
    { name: "Visa Services", path: "/services" },
    { name: "My Application", path: "/my-application" },
    { name: "Contact", path: "/Contact" },
  ];

  // Smooth scroll handler for in-page links
  const handleScroll = (e, path) => {
    if (path.startsWith("#")) {
      e.preventDefault();
      const targetId = path.replace("#", "");
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
      setIsOpen(false); // Close mobile menu
    }
  };

  return (
    <nav className="bg-gray-800 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2 text-xl font-bold">
          <FaPassport className="text-yellow-300 text-2xl" />
          Visa Navigator
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.path}
                onClick={(e) => handleScroll(e, link.path)}
                className="hover:text-yellow-300 transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Sidebar Menu (Mobile) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="flex justify-between items-center px-4 py-3 border-b border-gray-700">
          <h2 className="text-lg font-bold">Menu</h2>
          <button onClick={toggleMenu} className="text-2xl">
            <FaTimes />
          </button>
        </div>
        <ul className="flex flex-col mt-6 space-y-4 px-6">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.path}
                onClick={(e) => handleScroll(e, link.path)}
                className="block hover:text-yellow-300 transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={toggleMenu}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
