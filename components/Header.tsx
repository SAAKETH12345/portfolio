
import React, { useState, useEffect } from 'react';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-secondary shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center h-20">
        <a href="#home" className="text-2xl font-bold text-accent hover:opacity-80 transition-opacity">
          Saaketh
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-medium-gray hover:text-light-gray transition-colors duration-300 font-medium">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl text-light-gray`}></i>
        </button>

        {/* Mobile Navigation */}
        <div className={`fixed top-0 left-0 w-full h-full bg-primary bg-opacity-95 backdrop-blur-sm transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
          <nav className="flex flex-col items-center justify-center h-full space-y-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-2xl text-light-gray hover:text-accent transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
