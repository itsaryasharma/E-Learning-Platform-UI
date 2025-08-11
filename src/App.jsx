import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CourseDetail from './pages/CourseDetail';
import MyCourses from './pages/MyCourses';

function App() {
  return (
    // Add the basename prop here with your repository name
    <Router basename="/E-Learning-Platform-UI/">
      <div className="App flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses/:id" element={<CourseDetail />} />
            <Route path="/my-courses" element={<MyCourses />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;