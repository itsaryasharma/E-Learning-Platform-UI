import React from 'react';
import { useNavigate } from 'react-router-dom';

// CourseCard component - displays individual course information in a card format
const CourseCard = ({ id, title, description, thumbnail, instructor }) => {
  // Hook to handle navigation
  const navigate = useNavigate();

  // Handle card click to navigate to course detail page
  const handleCardClick = () => {
    navigate(`/courses/${id}`);
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-all duration-300 hover:shadow-xl hover:scale-105 border border-gray-200"
      onClick={handleCardClick}
    >
      {/* Course thumbnail image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={thumbnail} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        {/* Overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

      {/* Course content */}
      <div className="p-6">
        {/* Course title */}
        <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors duration-200">
          {title}
        </h3>
        
        {/* Instructor name */}
        <p className="text-sm text-gray-600 mb-3 flex items-center">
          <svg className="w-4 h-4 mr-2 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
          {instructor}
        </p>
        
        {/* Course description */}
        <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
          {description}
        </p>
        
        {/* View course button */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <span className="inline-flex items-center text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors duration-200">
            View Course
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
