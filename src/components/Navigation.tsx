
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Book', path: '/booking' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="text-2xl font-space font-light tracking-tight">
            <span className={`transition-colors duration-300 ${
              isScrolled ? 'text-barbershop-black' : 'text-white'
            }`}>
              PRECISION
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium tracking-wide transition-all duration-300 relative group ${
                  isScrolled ? 'text-barbershop-black hover:text-barbershop-gray-600' : 'text-white/90 hover:text-white'
                } ${location.pathname === link.path ? 'font-semibold' : ''}`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isScrolled ? 'bg-barbershop-black' : 'bg-white'
                } ${location.pathname === link.path ? 'w-full' : ''}`} />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className={`md:hidden p-2 ${
            isScrolled ? 'text-barbershop-black' : 'text-white'
          }`}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
