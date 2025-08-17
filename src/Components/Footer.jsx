import React from 'react';
import { Link } from 'react-router';
import { FaFacebook, FaYoutube, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', icon: <FaGithub size={24} />, url: 'https://github.com/Mostakim69' },
    { name: 'Facebook', icon: <FaFacebook size={24} />, url: 'https://www.facebook.com/MostakimHosennnn' },
    { name: 'Instagram', icon: <FaInstagram size={24} />, url: 'https://www.instagram.com/posterboy3369/#' },
    { name: 'Twitter', icon: <FaTwitter size={24} />, url: 'https://x.com/mostakim14467' },
    { name: 'YouTube', icon: <FaYoutube size={24} />, url: 'https://www.youtube.com/@PosterBoy3369' },
  ];

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Visa Services', path: '/services' },
    { name: 'My Application', path: '/my-application' },
    { name: 'About', path: '/about' },
  ];

  return (
    <footer className="flex flex-col items-center justify-center bg-gray-900 text-gray-300 py-16 text-sm font-Outfit">
      
      {/* Navigation Links */}
      <div className="flex flex-wrap justify-center gap-6">
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className="hover:text-white transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Social Icons */}
      <div className="flex gap-4 mt-6 text-gray-400">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-all duration-300"
          >
            {link.icon}
          </a>
        ))}
      </div>

      {/* Copyright */}
      <p className="mt-8 text-center text-gray-500">
        © {new Date().getFullYear()}{' '}
        <a href="/" className="hover:text-white">
          Visa Navigator
        </a>
        . All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
