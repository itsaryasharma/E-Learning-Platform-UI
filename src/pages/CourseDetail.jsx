import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getCourseById, getAllCourses } from '../data/courses';
import { getCourseProgress, updateCourseProgress } from '../utils/progressStorage';
import ProgressBar from '../components/ProgressBar';

// CourseDetail component - displays detailed information about a specific course
const CourseDetail = () => {
  // Get the course ID from URL parameters
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Get course data using the helper function
  const rawCourse = getCourseById(id);
  const course = rawCourse || getAllCourses()[0]; // fallback to first course if invalid id

  // Related courses (exclude current)
  const relatedCourses = getAllCourses().filter(c => c.id !== course.id).slice(0, 3);
  
  // State for progress
  const [progress, setProgress] = useState(0);
  const [isUpdating, setIsUpdating] = useState(false);

  // If id is invalid, update the URL to the fallback course for consistency
  useEffect(() => {
    if (!rawCourse && course?.id) {
      navigate(`/courses/${course.id}`, { replace: true });
    }
  }, [rawCourse, course, navigate]);

  // Load progress from localStorage on component mount
  useEffect(() => {
    if (course) {
      const storedProgress = getCourseProgress(course.id);
      setProgress(storedProgress);
    }
  }, [course]);

  // Handle progress update
  const handleProgressUpdate = (newProgress) => {
    setIsUpdating(true);
    setProgress(newProgress);
    updateCourseProgress(course.id, newProgress);
    setTimeout(() => setIsUpdating(false), 1000);
  };

  // Sample YouTube video ID (replace with actual course video)
  const videoId = "dQw4w9WgXcQ"; // This is just a placeholder

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
                {course?.title || 'Course'}
              </h1>
              <p className="text-lg text-gray-200">
                by {course?.instructor || 'Instructor'}
              </p>
            </div>
          </div>

          {/* Course information */}
          <div className="p-6 md:p-8">
            {/* Progress section */}
            <div className="mb-8 p-6 bg-blue-50 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Progress</h2>
              <ProgressBar percentage={progress} size="large" />
              <div className="mt-4 flex gap-2">
                <button 
                  onClick={() => handleProgressUpdate(Math.max(0, progress - 10))}
                  disabled={isUpdating}
                  className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 disabled:opacity-50"
                >
                  -10%
                </button>
                <button 
                  onClick={() => handleProgressUpdate(Math.min(100, progress + 10))}
                  disabled={isUpdating}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50"
                >
                  +10%
                </button>
              </div>
            </div>

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

            {/* Course video */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Course Preview</h2>
              <div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden shadow-lg">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title="Course Preview"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Course description */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">About This Course</h2>
              <p className="text-gray-700 leading-relaxed">
                {course.description}
              </p>
            </div>

            {/* Instructor information */}
            <div className="mb-8 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Instructor</h2>
              <div className="flex items-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                  {course.instructor.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{course.instructor}</h3>
                  <p className="text-gray-600">Expert Instructor</p>
                </div>
              </div>
            </div>

            {/* Course ID display */}
            <div className="mb-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-600">
                Course ID: <span className="font-semibold text-blue-600">{course.id}</span>
              </p>
            </div>

            {/* Enroll button */}
            <div className="text-center mb-10">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 text-lg">
                Enroll Now - {course.price}
              </button>
            </div>

            {/* Related courses */}
            {relatedCourses.length > 0 && (
              <div className="mt-2">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Related Courses</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedCourses.map(rc => (
                    <Link key={rc.id} to={`/courses/${rc.id}`} className="block bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                      <div className="h-40 overflow-hidden">
                        <img src={rc.thumbnail} alt={rc.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-900 line-clamp-2 mb-1">{rc.title}</h3>
                        <p className="text-sm text-gray-600">{rc.instructor}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
