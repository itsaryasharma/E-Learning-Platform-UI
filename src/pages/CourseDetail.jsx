import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCourseById } from '../data/courses';

// CourseDetail component - displays detailed information about a specific course
const CourseDetail = () => {
  // Get the course ID from URL parameters
  const { id } = useParams();
  
  // Get course data using the helper function
  const course = getCourseById(id);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Back to courses link */}
        <div className="mb-6">
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Courses
          </Link>
        </div>

        {/* Course detail content */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Course header with image */}
          <div className="relative h-64 md:h-80">
            <img 
              src={course?.thumbnail || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'} 
              alt={course?.title || 'Course'} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                {course?.title || 'Course Not Found'}
              </h1>
              <p className="text-lg text-gray-200">
                by {course?.instructor || 'Unknown Instructor'}
              </p>
            </div>
          </div>

          {/* Course information */}
          <div className="p-6 md:p-8">
            {course ? (
              <>
                {/* Course details grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Duration</h3>
                    <p className="text-gray-600">{course.duration}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Level</h3>
                    <p className="text-gray-600">{course.level}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Price</h3>
                    <p className="text-2xl font-bold text-blue-600">{course.price}</p>
                  </div>
                </div>

                {/* Course description */}
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">About This Course</h2>
                  <p className="text-gray-700 leading-relaxed">
                    {course.description}
                  </p>
                </div>

                {/* Course ID display */}
                <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    Course ID: <span className="font-semibold text-blue-600">{id}</span>
                  </p>
                </div>

                {/* Enroll button */}
                <div className="text-center">
                  <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 text-lg">
                    Enroll Now - {course.price}
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Course Not Found</h2>
                <p className="text-gray-600 mb-6">
                  The course you're looking for doesn't exist or has been removed.
                </p>
                <Link 
                  to="/" 
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                >
                  Browse All Courses
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
