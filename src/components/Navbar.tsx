
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
        isScrolled ? 'bg-navy-dark/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a 
          href="#" 
          className="font-bold text-xl md:text-2xl hero-text-gradient"
          aria-label="Nuraly Astanakulov"
        >
          NA
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="nav-link">About</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact</a>
          <a 
            href="/Nuraly_Astanakulov_Resume.pdf" 
            className="button-primary text-sm" 
            download
          >
            Resume
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <Menu className="h-6 w-6 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden fixed top-16 left-0 right-0 bg-navy-dark/95 backdrop-blur-md animate-slide-down py-6 px-4">
          <div className="flex flex-col space-y-4">
            <a 
              href="#about" 
              className="text-lg py-2 nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#skills" 
              className="text-lg py-2 nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </a>
            <a 
              href="#projects" 
              className="text-lg py-2 nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="text-lg py-2 nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <a 
              href="/Nuraly_Astanakulov_Resume.pdf" 
              className="button-primary text-center mt-4" 
              download
              onClick={() => setIsMenuOpen(false)}
            >
              Resume
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
