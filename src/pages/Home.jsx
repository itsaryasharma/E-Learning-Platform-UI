import React, { useState, useEffect, useMemo } from 'react';
import CourseCard from '../components/CourseCard';
import CourseSearch from '../components/CourseSearch';
import { getAllCourses } from '../data/courses';

// Home component - displays the main landing page with advanced course listings and search functionality
const Home = () => {
  // Get all courses from the data file
  const allCourses = getAllCourses();
  
  // State for search and filtering
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    level: 'all',
    duration: 'all',
    sortBy: 'relevance'
  });

  // Filter and search courses based on user input
  const filteredCourses = useMemo(() => {
    let filtered = [...allCourses];

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(course =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply level filter
    if (filters.level !== 'all') {
      filtered = filtered.filter(course =>
        course.level.toLowerCase().includes(filters.level.toLowerCase())
      );
    }

    // Apply duration filter
    if (filters.duration !== 'all') {
      const [min, max] = filters.duration.split('-').map(Number);
      filtered = filtered.filter(course => {
        const courseWeeks = parseInt(course.duration.split(' ')[0]);
        if (filters.duration === '15+') {
          return courseWeeks >= 15;
        }
        return courseWeeks >= min && courseWeeks <= max;
      });
    }

    // Apply sorting
    switch (filters.sortBy) {
      case 'price-low':
        filtered.sort((a, b) => parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', '')));
        break;
      case 'price-high':
        filtered.sort((a, b) => parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', '')));
        break;
      case 'newest':
        filtered.sort((a, b) => b.id - a.id);
        break;
      case 'popularity':
        // Mock popularity based on course ID (lower ID = more popular)
        filtered.sort((a, b) => a.id - b.id);
        break;
      default:
        // Relevance - keep original order
        break;
    }

    return filtered;
  }, [allCourses, searchTerm, filters]);

  // Handle search input
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  // Handle filter changes
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero section with enhanced messaging */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Master New Skills with
              <span className="block text-yellow-300">Expert-Led Courses</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Join thousands of learners worldwide and advance your career with our comprehensive 
              e-learning platform featuring industry-leading instructors and cutting-edge content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Start Learning Today
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 text-lg">
                View Course Catalog
              </button>
            </div>
            
            {/* Quick stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">{allCourses.length}+</div>
                <div className="text-blue-100">Expert Courses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">50K+</div>
                <div className="text-blue-100">Active Learners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">95%</div>
                <div className="text-blue-100">Completion Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course search and filtering section */}
      <div className="container mx-auto px-4 py-12">
        <CourseSearch 
          onSearch={handleSearch}
          onFilterChange={handleFilterChange}
          totalCourses={filteredCourses.length}
        />

        {/* Results summary */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {searchTerm ? `Search Results for "${searchTerm}"` : 'Featured Courses'}
            </h2>
            <p className="text-lg text-gray-600">
              {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''} found
              {searchTerm && ` matching "${searchTerm}"`}
            </p>
          </div>
          
          {/* View options */}
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-sm text-gray-600">View:</span>
            <button className="px-3 py-1 bg-blue-600 text-white rounded-lg text-sm">Grid</button>
            <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg text-sm hover:bg-gray-300">List</button>
          </div>
        </div>

        {/* Course grid with enhanced layout */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                id={course.id}
                title={course.title}
                description={course.description}
                thumbnail={course.thumbnail}
                instructor={course.instructor}
              />
            ))}
          </div>
        ) : (
          /* No results state */
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">No courses found</h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setFilters({ level: 'all', duration: 'all', sortBy: 'relevance' });
              }}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Load more section */}
        {filteredCourses.length > 0 && (
          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 text-lg">
              Load More Courses
            </button>
          </div>
        )}

        {/* Featured categories section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Popular Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Web Development', icon: '💻', count: '24 courses' },
              { name: 'Data Science', icon: '📊', count: '18 courses' },
              { name: 'Design', icon: '🎨', count: '15 courses' },
              { name: 'Business', icon: '💼', count: '22 courses' }
            ].map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-200 cursor-pointer">
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-sm text-gray-600">{category.count}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
