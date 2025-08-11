import React from 'react';

// ProgressBar component - displays course progress with customizable percentage
const ProgressBar = ({ percentage = 60, showLabel = true, size = 'default' }) => {
  // Ensure percentage is between 0 and 100
  const clampedPercentage = Math.min(Math.max(percentage, 0), 100);
  
  // Size variants for different contexts
  const sizeClasses = {
    small: 'h-2',
    default: 'h-3',
    large: 'h-4'
  };

  return (
    <div className="w-full">
      {/* Progress label */}
      {showLabel && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">Progress</span>
          <span className="text-sm font-semibold text-blue-600">{clampedPercentage}%</span>
        </div>
      )}
      
      {/* Progress bar container */}
      <div className={`w-full bg-gray-200 rounded-full ${sizeClasses[size]}`}>
        {/* Progress fill */}
        <div 
          className="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full transition-all duration-500 ease-out shadow-sm"
          style={{ width: `${clampedPercentage}%` }}
        >
          {/* Optional: Add a subtle shine effect */}
          <div className="h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
