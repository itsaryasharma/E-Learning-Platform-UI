import React from 'react';

// CourseAnalytics component - displays comprehensive learning analytics and insights
// This component provides detailed statistics about user's learning progress and achievements
const CourseAnalytics = ({ enrolledCourses, totalProgress, learningStreak, certificatesEarned }) => {
  // Calculate additional analytics
  const totalCourses = enrolledCourses.length;
  const completedCourses = enrolledCourses.filter(course => course.progress === 100).length;
  const inProgressCourses = enrolledCourses.filter(course => course.progress > 0 && course.progress < 100).length;
  const averageProgress = totalCourses > 0 ? Math.round(totalProgress / totalCourses) : 0;

  // Get top performing course
  const topCourse = enrolledCourses.reduce((top, current) => 
    current.progress > top.progress ? current : top, { progress: 0 }
  );

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      {/* Analytics Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 md:mb-0">
          Learning Analytics
        </h2>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-sm text-gray-600">Live Data</span>
        </div>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Total Progress */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-blue-600">Overall Progress</p>
              <p className="text-3xl font-bold text-blue-900">{averageProgress}%</p>
            </div>
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Learning Streak */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-green-600">Learning Streak</p>
              <p className="text-3xl font-bold text-green-900">{learningStreak} days</p>
            </div>
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Completed Courses */}
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-purple-600">Completed</p>
              <p className="text-3xl font-bold text-purple-900">{completedCourses}</p>
            </div>
            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Certificates */}
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-orange-600">Certificates</p>
              <p className="text-3xl font-bold text-orange-900">{certificatesEarned}</p>
            </div>
            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Course Progress Breakdown */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Course Progress Breakdown</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Total Enrolled</span>
              <span className="font-semibold text-gray-900">{totalCourses}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">In Progress</span>
              <span className="font-semibold text-blue-600">{inProgressCourses}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Completed</span>
              <span className="font-semibold text-green-600">{completedCourses}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Not Started</span>
              <span className="font-semibold text-gray-400">{totalCourses - completedCourses - inProgressCourses}</span>
            </div>
          </div>
        </div>

        {/* Top Performing Course */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performing Course</h3>
          {topCourse.progress > 0 ? (
            <div className="space-y-3">
              <h4 className="font-medium text-gray-900 line-clamp-2">{topCourse.title}</h4>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Progress</span>
                <span className="font-semibold text-green-600">{topCourse.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-green-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${topCourse.progress}%` }}
                ></div>
              </div>
            </div>
          ) : (
            <p className="text-gray-500 text-sm">No courses in progress yet.</p>
          )}
        </div>
      </div>

      {/* Achievement Badges */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Achievements</h3>
        <div className="flex flex-wrap gap-3">
          {completedCourses > 0 && (
            <div className="flex items-center bg-yellow-100 text-yellow-800 px-3 py-2 rounded-full text-sm">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Course Completion
            </div>
          )}
          {learningStreak >= 7 && (
            <div className="flex items-center bg-blue-100 text-blue-800 px-3 py-2 rounded-full text-sm">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              7-Day Streak
            </div>
          )}
          {averageProgress >= 50 && (
            <div className="flex items-center bg-green-100 text-green-800 px-3 py-2 rounded-full text-sm">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Halfway There
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseAnalytics;
