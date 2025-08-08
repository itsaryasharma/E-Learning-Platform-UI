import React from 'react';
import CourseCard from '../components/CourseCard';
import { getAllCourses } from '../data/courses';

// Home component - displays the main landing page with course listings
const Home = () => {
  // Get all courses from the data file
  const courses = getAllCourses();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to Our E-Learning Platform
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8">
            Discover amazing courses and enhance your skills
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Explore Courses
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Course listings section */}
      <div className="container mx-auto px-4 py-12">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Courses
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our carefully curated selection of courses designed to help you succeed in your learning journey.
          </p>
        </div>

        {/* Course grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Map through courses and render CourseCard components */}
          {courses.map((course) => (
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

        {/* Load more button */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
            Load More Courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
