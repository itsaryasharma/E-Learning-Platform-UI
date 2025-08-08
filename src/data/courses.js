// Dummy course data for the E-Learning Platform
// This file contains sample course information for demonstration purposes

export const dummyCourses = [
  {
    id: 1,
    title: "Complete Web Development Bootcamp",
    description: "Learn HTML, CSS, JavaScript, React, and Node.js from scratch. Build real-world projects and become a full-stack developer.",
    thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    instructor: "Dr. Sarah Johnson",
    duration: "12 weeks",
    level: "Beginner to Intermediate",
    price: "$99.99"
  },
  {
    id: 2,
    title: "Data Science Fundamentals",
    description: "Master the basics of data science including Python, statistics, machine learning, and data visualization techniques.",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    instructor: "Prof. Michael Chen",
    duration: "10 weeks",
    level: "Intermediate",
    price: "$129.99"
  },
  {
    id: 3,
    title: "UI/UX Design Masterclass",
    description: "Create beautiful and functional user interfaces. Learn design principles, prototyping, and user experience best practices.",
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    instructor: "Lisa Rodriguez",
    duration: "8 weeks",
    level: "All Levels",
    price: "$89.99"
  },
  {
    id: 4,
    title: "Mobile App Development with React Native",
    description: "Build cross-platform mobile applications using React Native. Learn to create apps for both iOS and Android platforms.",
    thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    instructor: "Alex Thompson",
    duration: "14 weeks",
    level: "Intermediate to Advanced",
    price: "$149.99"
  },
  {
    id: 5,
    title: "Digital Marketing Strategy",
    description: "Learn modern digital marketing techniques including SEO, social media marketing, content strategy, and analytics.",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    instructor: "Emma Davis",
    duration: "6 weeks",
    level: "Beginner",
    price: "$79.99"
  },
  {
    id: 6,
    title: "Python for Beginners",
    description: "Start your programming journey with Python. Learn syntax, data structures, functions, and object-oriented programming.",
    thumbnail: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    instructor: "David Wilson",
    duration: "8 weeks",
    level: "Beginner",
    price: "$69.99"
  }
];

// Helper function to get course by ID
export const getCourseById = (id) => {
  return dummyCourses.find(course => course.id === parseInt(id));
};

// Helper function to get all courses
export const getAllCourses = () => {
  return dummyCourses;
};
