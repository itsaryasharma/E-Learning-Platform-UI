import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200">
    <div className="flex justify-between h-16 px-0 sm:px-2 lg:px-4">
      
      {/* Logo - sits flush to the left */}
      <div className="flex items-center pl-2">
        <Link to="/" className="flex-shrink-0 flex items-center">
          <div className="bg-blue-600 text-white px-3 py-1 rounded-lg font-bold text-xl mr-3">
            ELP
          </div>
          <h1 className="text-xl font-bold text-gray-900 hidden sm:block">
            E-Learning Platform
          </h1>
        </Link>
      </div>
  
      {/* Nav links - stay within centered container */}
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
        <button className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </nav>
  
  );
};

export default Navbar;
