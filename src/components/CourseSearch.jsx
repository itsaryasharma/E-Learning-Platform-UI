import React, { useState } from 'react';

// CourseSearch component - provides advanced filtering and search functionality
// This component allows users to search and filter courses by various criteria
const CourseSearch = ({ onSearch, onFilterChange, totalCourses }) => {
  // State for search and filter inputs
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedDuration, setSelectedDuration] = useState('all');
  const [sortBy, setSortBy] = useState('relevance');

  // Handle search input changes
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  // Handle filter changes
  const handleFilterChange = (filterType, value) => {
    switch (filterType) {
      case 'level':
        setSelectedLevel(value);
        break;
      case 'duration':
        setSelectedDuration(value);
        break;
      case 'sort':
        setSortBy(value);
        break;
      default:
        break;
    }
    
    // Notify parent component of filter changes
    onFilterChange({
      searchTerm,
      level: filterType === 'level' ? value : selectedLevel,
      duration: filterType === 'duration' ? value : selectedDuration,
      sortBy: filterType === 'sort' ? value : sortBy
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      {/* Search header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 md:mb-0">
          Find Your Perfect Course
        </h2>
        <p className="text-gray-600">
          {totalCourses} course{totalCourses !== 1 ? 's' : ''} available
        </p>
      </div>

      {/* Search bar */}
      <div className="mb-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search for courses, topics, or instructors..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Level filter */}
        <div>
          <label htmlFor="level-filter" className="block text-sm font-medium text-gray-700 mb-2">
            Skill Level
          </label>
          <select
            id="level-filter"
            value={selectedLevel}
            onChange={(e) => handleFilterChange('level', e.target.value)}
            className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Levels</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>

        {/* Duration filter */}
        <div>
          <label htmlFor="duration-filter" className="block text-sm font-medium text-gray-700 mb-2">
            Duration
          </label>
          <select
            id="duration-filter"
            value={selectedDuration}
            onChange={(e) => handleFilterChange('duration', e.target.value)}
            className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">Any Duration</option>
            <option value="0-5">0-5 weeks</option>
            <option value="6-10">6-10 weeks</option>
            <option value="11-15">11-15 weeks</option>
            <option value="15+">15+ weeks</option>
          </select>
        </div>

        {/* Sort by */}
        <div>
          <label htmlFor="sort-filter" className="block text-sm font-medium text-gray-700 mb-2">
            Sort By
          </label>
          <select
            id="sort-filter"
            value={sortBy}
            onChange={(e) => handleFilterChange('sort', e.target.value)}
            className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="relevance">Relevance</option>
            <option value="popularity">Popularity</option>
            <option value="newest">Newest</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Active filters display */}
      {(selectedLevel !== 'all' || selectedDuration !== 'all' || searchTerm) && (
        <div className="mt-4 flex flex-wrap gap-2">
          {searchTerm && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
              Search: "{searchTerm}"
              <button
                onClick={() => handleSearchChange({ target: { value: '' } })}
                className="ml-2 text-blue-600 hover:text-blue-800"
              >
                ×
              </button>
            </span>
          )}
          {selectedLevel !== 'all' && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">
              Level: {selectedLevel}
              <button
                onClick={() => handleFilterChange('level', 'all')}
                className="ml-2 text-green-600 hover:text-green-800"
              >
                ×
              </button>
            </span>
          )}
          {selectedDuration !== 'all' && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-purple-100 text-purple-800">
              Duration: {selectedDuration}
              <button
                onClick={() => handleFilterChange('duration', 'all')}
                className="ml-2 text-purple-600 hover:text-purple-800"
              >
                ×
              </button>
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default CourseSearch;
