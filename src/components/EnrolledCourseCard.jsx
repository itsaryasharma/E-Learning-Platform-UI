import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from './ProgressBar';

// EnrolledCourseCard component - displays enrolled course information with progress
const EnrolledCourseCard = ({ id, title, description, thumbnail, instructor, progress = 0 }) => {
  // Hook to handle navigation
  const navigate = useNavigate();

  // Handle continue learning click
  const handleContinueLearning = () => {
    navigate(`/courses/${id}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      {/* Course thumbnail image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={thumbnail} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        {/* Progress overlay */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-sm font-semibold text-blue-600">{progress}%</span>
        </div>
        {/* Overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

      {/* Course content */}
      <div className="p-6">
        {/* Course title */}
        <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
          {title}
        </h3>
        
        {/* Instructor name */}
        <p className="text-sm text-gray-600 mb-4 flex items-center">
          <svg className="w-4 h-4 mr-2 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
          {instructor}
        </p>
        
        {/* Progress bar */}
        <div className="mb-4">
          <ProgressBar percentage={progress} showLabel={false} size="small" />
        </div>
        
        {/* Course description */}
        <p className="text-gray-700 text-sm leading-relaxed line-clamp-2 mb-4">
          {description}
        </p>
        
        {/* Continue learning button */}
        <button
          onClick={handleContinueLearning}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Continue Learning
        </button>
      </div>
    </div>
  );
};

export default EnrolledCourseCard;
