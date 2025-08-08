# E-Learning Platform UI

A modern React application built with Vite, featuring a responsive navigation system and multiple pages for an e-learning platform.

## Features

- **React 19** with Vite for fast development
- **Tailwind CSS** for modern, responsive styling
- **React Router** for client-side routing
- **Desktop-first responsive design**
- **Component-based architecture**

## Project Structure

```
src/
├── components/
│   └── Navbar.jsx          # Navigation component
├── pages/
│   ├── Home.jsx            # Home page
│   ├── CourseDetail.jsx    # Course detail page
│   └── MyCourses.jsx       # My courses page
├── App.jsx                 # Main app component with routing
├── main.jsx               # Entry point
└── index.css              # Tailwind CSS imports
```

## Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start the development server:**

   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Pages

- **Home** (`/`) - Main landing page
- **Course Detail** (`/course-detail`) - Individual course information
- **My Courses** (`/my-courses`) - User's enrolled courses

## Technologies Used

- React 19
- Vite
- Tailwind CSS
- React Router DOM
- PostCSS
- Autoprefixer
