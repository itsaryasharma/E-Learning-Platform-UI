import React, { useState, useEffect } from 'react';
import EnrolledCourseCard from '../components/EnrolledCourseCard';
import CourseAnalytics from '../components/CourseAnalytics';
import { getAllCourses } from '../data/courses';
import { getCourseProgress } from '../utils/progressStorage';

// MyCourses component - displays user's enrolled courses with comprehensive analytics and progress tracking
const MyCourses = () => {
  // Get all courses and filter for enrolled ones (mock data)
  const allCourses = getAllCourses();
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [sortBy, setSortBy] = useState('progress'); // 'progress', 'recent', 'alphabetical'

  // Mock analytics data
  const [analyticsData] = useState({
    learningStreak: 12,
    certificatesEarned: 3
  });

  // Mock enrolled courses (first 3 courses)
  useEffect(() => {
    const mockEnrolledCourses = allCourses.slice(0, 3).map(course => ({
      ...course,
      progress: getCourseProgress(course.id)
    }));
    setEnrolledCourses(mockEnrolledCourses);
  }, [allCourses]);

  // Calculate overall progress
  const overallProgress = enrolledCourses.length > 0 
    ? Math.round(enrolledCourses.reduce((sum, course) => sum + course.progress, 0) / enrolledCourses.length)
    : 0;

  // Sort courses based on selected criteria
  const sortedCourses = [...enrolledCourses].sort((a, b) => {
    switch (sortBy) {
      case 'progress':
        return b.progress - a.progress;
      case 'recent':
        return b.id - a.id;
      case 'alphabetical':
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Page header with enhanced styling */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">My Learning Dashboard</h1>
              <p className="text-lg text-gray-600">
                Track your progress, manage your courses, and continue your learning journey.
              </p>
            </div>
            
            {/* Quick actions */}
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
                Browse More Courses
              </button>
            </div>
          </div>
        </div>

        {/* Comprehensive Analytics Section */}
        <CourseAnalytics 
          enrolledCourses={enrolledCourses}
          totalProgress={overallProgress}
          learningStreak={analyticsData.learningStreak}
          certificatesEarned={analyticsData.certificatesEarned}
        />

        {/* Course Management Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">My Enrolled Courses</h2>
              <p className="text-gray-600">
                {enrolledCourses.length} course{enrolledCourses.length !== 1 ? 's' : ''} • {overallProgress}% average progress
              </p>
            </div>
            
            {/* View and sort controls */}
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Sort by:</span>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="progress">Progress</option>
                  <option value="recent">Recently Added</option>
                  <option value="alphabetical">Alphabetical</option>
                </select>
              </div>
              
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">View:</span>
                <button 
                  onClick={() => setViewMode('grid')}
                  className={`px-3 py-1 rounded-lg text-sm transition-colors duration-200 ${
                    viewMode === 'grid' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Grid
                </button>
                <button 
                  onClick={() => setViewMode('list')}
                  className={`px-3 py-1 rounded-lg text-sm transition-colors duration-200 ${
                    viewMode === 'list' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  List
                </button>
              </div>
            </div>
          </div>

          {/* Enrolled courses display */}
          {enrolledCourses.length > 0 ? (
            <div className={viewMode === 'grid' 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              : "space-y-6"
            }>
              {sortedCourses.map((course) => (
                <EnrolledCourseCard
                  key={course.id}
                  id={course.id}
                  title={course.title}
                  description={course.description}
                  thumbnail={course.thumbnail}
                  instructor={course.instructor}
                  progress={course.progress}
                />
              ))}
            </div>
          ) : (
            /* Empty state with enhanced design */
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Start Your Learning Journey</h2>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                You haven't enrolled in any courses yet. Browse our course catalog to discover amazing learning opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/" 
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Browse Courses
                </a>
                <button className="inline-flex items-center bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-200">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Learn More
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Learning Recommendations */}
        {enrolledCourses.length > 0 && (
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Recommended Next Steps</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <h4 className="font-medium text-gray-900">Continue Learning</h4>
                </div>
                <p className="text-sm text-gray-600">Pick up where you left off in your courses</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-medium text-gray-900">Complete Courses</h4>
                </div>
                <p className="text-sm text-gray-600">Finish courses to earn certificates</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <h4 className="font-medium text-gray-900">Explore New Topics</h4>
                </div>
                <p className="text-sm text-gray-600">Discover related courses and skills</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCourses;
