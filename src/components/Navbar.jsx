import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200">
      <div className="flex justify-between h-16 px-0 sm:px-2 lg:px-4">
        
        {/* Logo - sits flush to the left */}
        <div className="flex items-center pl-2">
          <Link to="/" className="flex-shrink-0 flex items-center" onClick={closeMobileMenu}>
            <div className="bg-blue-600 text-white px-3 py-1 rounded-lg font-bold text-xl mr-3">
              ELP
            </div>
            <h1 className="text-xl font-bold text-gray-900 hidden sm:block">
              E-Learning Platform
            </h1>
          </Link>
        </div>
    
        {/* Desktop Nav links - stay within centered container */}
        <div className="hidden md:flex items-center space-x-8 pr-4">
          <Link
            to="/"
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
              isActive('/')
                ? 'bg-blue-100 text-blue-700'
                : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
            }`}
          >
            Home
          </Link>
          <Link
            to="/courses/1"
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
              isActive('/course-detail') || location.pathname.startsWith('/courses/')
                ? 'bg-blue-100 text-blue-700'
                : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
            }`}
          >
            Course Detail
          </Link>
          <Link
            to="/my-courses"
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
              isActive('/my-courses')
                ? 'bg-blue-100 text-blue-700'
                : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
            }`}
          >
            My Courses
          </Link>
        </div>
    
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center pr-2">
          <button 
            onClick={toggleMobileMenu}
            className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            aria-label="Toggle mobile menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              onClick={closeMobileMenu}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                isActive('/')
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              Home
            </Link>
            <Link
              to="/courses/1"
              onClick={closeMobileMenu}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                isActive('/course-detail') || location.pathname.startsWith('/courses/')
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              Course Detail
            </Link>
            <Link
              to="/my-courses"
              onClick={closeMobileMenu}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                isActive('/my-courses')
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              My Courses
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
