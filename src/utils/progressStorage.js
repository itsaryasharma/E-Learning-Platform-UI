// Utility functions for managing course progress in localStorage

const STORAGE_KEY = 'courseProgress';

// Get all stored progress data
export const getStoredProgress = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch (error) {
    console.error('Error reading progress from localStorage:', error);
    return {};
  }
};

// Get progress for a specific course
export const getCourseProgress = (courseId) => {
  const progress = getStoredProgress();
  return progress[courseId] || 0;
};

// Update progress for a specific course
export const updateCourseProgress = (courseId, percentage) => {
  try {
    const progress = getStoredProgress();
    progress[courseId] = Math.min(Math.max(percentage, 0), 100);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    return true;
  } catch (error) {
    console.error('Error saving progress to localStorage:', error);
    return false;
  }
};

// Get all courses with progress
export const getAllCoursesWithProgress = () => {
  return getStoredProgress();
};

// Clear all progress data
export const clearAllProgress = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
    return true;
  } catch (error) {
    console.error('Error clearing progress from localStorage:', error);
    return false;
  }
};
