# 🎓 E-Learning Platform UI

![Frontend](https://img.shields.io/badge/Frontend-React%20%26%20Vite-blue)
![Styling](https://img.shields.io/badge/Styling-Tailwind%20CSS-06B6D4)
![Routing](https://img.shields.io/badge/Routing-React%20Router%20DOM-orange)
![State Management](https://img.shields.io/badge/State%20Management-React%20Hooks-61DAFB)
![Data Persistence](https://img.shields.io/badge/Data%20Persistence-localStorage-informational)
![Built With](https://img.shields.io/badge/Built%20with-Vite%20%7C%20NPM-violet)
![Deployed with GitHub Pages](https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-informational?logo=github)

## 🌐 Live Demo 👉 [Check it out on Git Hub Pages](https://itsaryasharma.github.io/E-Learning-Platform-UI/)

---

**COMPANY:** CODETECH IT SOLUTIONS

**NAME:** ARYA KUMAR

**INTERN ID:** CT04DZ311

**DOMAIN:** FRONTEND WEB DEVELOPMENT

**DURATION:** 4 WEEKS

**MENTOR:** NEELA SANTOSH

---

## 📋 Project Overview

The E-Learning Platform UI is a modern, responsive frontend application built with React that aims to deliver a seamless and engaging learning experience for users. Designed as an internship project, it replicates the core functionalities of professional e-learning platforms, enabling users to browse courses, track progress, and interact with rich multimedia content—all within a polished and intuitive interface.

At its core, the platform offers a comprehensive course catalog that allows learners to explore a wide variety of subjects through an organized listing. Users can easily search for courses by keywords such as title, instructor, or description. Additionally, advanced filtering options enable sorting by skill level, course duration, and pricing, making it simple for users to find the perfect match for their learning goals. The platform supports multiple sorting criteria, including relevance, popularity, price, and recency, ensuring a personalized discovery experience.

Once enrolled, learners benefit from robust progress tracking features. Interactive progress bars visually represent the completion status of each course, with real-time updates persisted using localStorage to ensure progress is saved across sessions. This persistence offers users the convenience of resuming their learning exactly where they left off. The progress tracking system is complemented by a comprehensive analytics dashboard, which displays key learning metrics such as streaks, certificates earned, and overall course performance. This fosters motivation by providing tangible insights into users’ achievements and learning habits.

To enhance learning engagement, the platform integrates video content seamlessly. YouTube videos are embedded within course detail pages using responsive video players that adapt across all screen sizes, from mobile to desktop. These players provide full control over playback, including custom controls and smooth UI transitions, ensuring an immersive multimedia experience.

Navigation is handled through a multi-page interface powered by React Router, facilitating smooth transitions between the Home page (course browsing), Course Detail pages, and the My Courses dashboard. This setup mimics professional single-page applications, providing a native app-like experience while maintaining the scalability and modularity of React.

From a design perspective, the platform embraces a mobile-first responsive design philosophy, ensuring usability across diverse devices. Tailwind CSS utility classes drive consistent styling, with a professional color palette, accessible typography, and interactive hover effects that enhance the user experience. Animations and transitions are thoughtfully applied to provide smooth visual feedback without overwhelming users.

Under the hood, the project leverages modern frontend tooling including Vite for fast development and bundling, React hooks such as useState, useEffect, and useMemo for state and performance management, and ESLint to maintain clean, readable code. The localStorage API underpins data persistence, enabling users to maintain their progress without requiring backend support.

Overall, this project demonstrates the ability to build an industry-level e-learning frontend application that balances functionality, performance, and user experience. It fulfills the core internship requirements while incorporating advanced features such as real-time filtering, analytics, and video integration. The architecture is modular, well-documented, and primed for future expansion to include backend connectivity, authentication, payment integration, and more.

This E-Learning Platform UI stands as a solid foundation for anyone looking to deliver educational content online with modern frontend technologies, serving both learners and educators with a streamlined, interactive interface designed for success.

---

## ✨ Key Features

### 🎯 Core Functionality

- **Advanced Course Search & Filtering**: Search by title, instructor, or description with multiple filter options
- **Interactive Progress Tracking**: Real-time progress updates with localStorage persistence
- **Responsive Design**: Mobile-first approach with adaptive layouts for all devices
- **Professional UI/UX**: Modern design with smooth animations and intuitive navigation

### 📊 Analytics & Insights

- **Learning Dashboard**: Comprehensive analytics with progress metrics and achievements
- **Course Analytics**: Detailed breakdown of learning statistics and performance
- **Achievement System**: Badges and certificates for completed milestones
- **Progress Visualization**: Interactive progress bars and visual indicators

### 🎥 Video Integration

- **Embedded Video Content**: YouTube video integration for course previews
- **Responsive Video Players**: Optimized video display across all screen sizes
- **Video Controls**: Full video player functionality with custom controls

### 🔍 Search & Discovery

- **Advanced Search**: Real-time search with multiple criteria
- **Smart Filtering**: Filter by skill level, duration, and price
- **Sorting Options**: Sort by relevance, popularity, price, and date
- **Category Browsing**: Organized course categories for easy discovery

---

## 🛠️ Technology Stack

- **Frontend Framework**: React with Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **State Management**: React Hooks (useState, useEffect, useMemo)
- **Data Persistence**: localStorage for progress tracking
- **Build Tool**: Vite
- **Package Manager**: npm

---

## 📁 Project Structure

```
src/
├── components/                 # Reusable UI components
│   ├── CourseCard.jsx         # Course display card
│   ├── EnrolledCourseCard.jsx # Enhanced card for enrolled courses
│   ├── ProgressBar.jsx        # Interactive progress indicator
│   ├── CourseSearch.jsx       # Advanced search and filtering
│   ├── CourseAnalytics.jsx    # Learning analytics dashboard
│   ├── Navbar.jsx             # Navigation component
│   └── Footer.jsx             # Site footer
├── pages/                     # Main application pages
│   ├── Home.jsx               # Landing page with course catalog
│   ├── CourseDetail.jsx       # Individual course details
│   └── MyCourses.jsx          # User's enrolled courses
├── data/                      # Data management
│   └── courses.js             # Course data and helper functions
├── utils/                     # Utility functions
│   └── progressStorage.js     # localStorage management
├── App.jsx                    # Main application component
├── main.jsx                   # Application entry point
└── index.css                  # Global styles and Tailwind imports
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher)

### Installation & Deployment

1. **Clone the repository**

   ```bash
   git clone https://github.com/itsaryasharma/e-learning-platform-ui.git
   cd e-learning-platform-ui

   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

---

## 🚀 How to Run and Deploy the Project

### 🖥 Local Development

1️⃣ Install dependencies

```bash
npm install
```

2️⃣ Start the development server

```bash
npm run dev
```

3️⃣ Open your browser and go to:

```
http://localhost:5173
```

---

### 🌐 Deployment on GitHub Pages

1️⃣ Install GitHub Pages package

```bash
npm install gh-pages --save-dev
```

2️⃣ Add homepage URL to `package.json`  
Replace with your GitHub username & repo name:

```json
"homepage": "https://<your-github-username>.github.io/<your-repo-name>"
```

**Example:**

```json
"homepage": "https://itsaryasharma.github.io/e-learning-platform-ui"
```

3️⃣ Add deployment scripts to `package.json`

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

4️⃣ Build and deploy

```bash
npm run deploy
```

---

✅ **Access your app**  
Once deployed, visit:

```
https://<your-github-username>.github.io/<your-repo-name>
```

**Example:**

```
https://itsaryasharma.github.io/e-learning-platform-ui
```

> ⏳ Deployment may take 1–2 minutes to go live.

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 🎨 Design System

### Color Palette

- **Primary**: Blue (#2563EB) - Main brand color
- **Secondary**: Purple (#7C3AED) - Accent color
- **Success**: Green (#10B981) - Progress and completion
- **Warning**: Orange (#F59E0B) - Notifications and alerts
- **Neutral**: Gray scale for text and backgrounds

### Typography

- **Headings**: Bold, large text for hierarchy
- **Body**: Regular weight for readability
- **Captions**: Smaller text for metadata

### Components

- **Cards**: Rounded corners with subtle shadows
- **Buttons**: Consistent styling with hover effects
- **Progress Bars**: Animated with gradient fills
- **Forms**: Clean inputs with focus states

## 📱 Responsive Design

The platform is built with a **mobile-first approach** and includes:

- **Breakpoints**:

  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px

- **Grid Systems**:

  - Mobile: 1 column
  - Tablet: 2 columns
  - Desktop: 3 columns

- **Navigation**:
  - Desktop: Full navigation bar
  - Mobile: Collapsible menu

## 🔧 Key Components

### CourseCard

- Displays course information with hover effects
- Clickable navigation to course details
- Responsive image handling
- Instructor information display

### ProgressBar

- Customizable progress percentage
- Multiple size variants
- Smooth animations
- Optional label display

### CourseSearch

- Real-time search functionality
- Advanced filtering options
- Active filter display
- Sort and view controls

### CourseAnalytics

- Comprehensive learning metrics
- Achievement badges
- Progress breakdown
- Performance insights

## 📊 Data Management

### Course Data Structure

```javascript
{
  id: number,
  title: string,
  description: string,
  thumbnail: string,
  instructor: string,
  duration: string,
  level: string,
  price: string
}
```

### Progress Tracking

- **localStorage Integration**: Persistent progress across sessions
- **Real-time Updates**: Immediate progress reflection
- **Error Handling**: Graceful fallbacks for storage issues

---

## 🎯 Internship Requirements Fulfillment

### ✅ Core Requirements

- [x] **Course Listing**: Comprehensive catalog with search and filtering
- [x] **Progress Tracking**: Interactive progress bars with localStorage
- [x] **Video Embedding**: YouTube video integration
- [x] **Multi-page Interface**: React Router with multiple pages

### ✅ Industry Standards

- [x] **Responsive Design**: Mobile-first approach
- [x] **Professional UI/UX**: Modern design with animations
- [x] **Code Quality**: Clean, commented, modular code
- [x] **Performance**: Optimized with React best practices
- [x] **Accessibility**: Semantic HTML and keyboard navigation

### ✅ Advanced Features

- [x] **Search & Filtering**: Advanced course discovery
- [x] **Analytics Dashboard**: Comprehensive learning insights
- [x] **Progress Persistence**: localStorage integration
- [x] **Interactive Elements**: Hover effects and animations

## 🔍 Testing the Application

### Navigation Flow

1. **Home Page**: Browse course catalog with search/filter
2. **Course Detail**: View individual course with video and progress
3. **My Courses**: Manage enrolled courses with analytics

### Key Interactions

- **Search Courses**: Use the search bar to find specific courses
- **Filter Results**: Apply level, duration, and sorting filters
- **Track Progress**: Update progress on course detail pages
- **View Analytics**: Check learning dashboard for insights

---

### Deploy Options

- **Vercel**: Connect repository for automatic deployment
- **Netlify**: Drag and drop build folder
- **GitHub Pages**: Configure for static hosting

---

## 📈 Future Enhancements

### Potential Additions

- **User Authentication**: Login/signup system
- **Payment Integration**: Course purchasing
- **Discussion Forums**: Student interactions
- **Certificate Generation**: Completion certificates
- **Mobile App**: React Native version
- **Backend Integration**: API connectivity

### Performance Optimizations

- **Image Optimization**: WebP format and lazy loading
- **Code Splitting**: Route-based code splitting
- **Caching**: Service worker implementation
- **CDN**: Content delivery network integration

---

## 🤝 Contributing

### Development Guidelines

1. **Code Style**: Follow ESLint configuration
2. **Component Structure**: Use functional components with hooks
3. **Styling**: Utilize Tailwind CSS classes
4. **Comments**: Add descriptive comments for complex logic
5. **Testing**: Ensure responsive design across devices

### Code Quality

- **Modular Architecture**: Reusable components
- **Clean Code**: Readable and maintainable
- **Performance**: Optimized rendering and updates
- **Accessibility**: WCAG compliance

---

## 📜 LICENSE

MIT License

---

## 👨‍💻 Author - Arya Kumar

---

# OUTPUTS

<img width="1918" height="1017" alt="Image" src="https://github.com/user-attachments/assets/46104d82-d61a-4dbc-94a7-252a2c577e42" />

<img width="1918" height="1016" alt="Image" src="https://github.com/user-attachments/assets/d9513da3-7832-4bdf-b251-e153c4f021f2" />

<img width="1918" height="1012" alt="Image" src="https://github.com/user-attachments/assets/084ff2fe-62d1-434a-a214-01f6aaa17dbe" />

<img width="1913" height="1012" alt="Image" src="https://github.com/user-attachments/assets/607a6d36-c002-4f41-b387-ca5692d41710" />

<img width="1918" height="1078" alt="Image" src="https://github.com/user-attachments/assets/25bd62a7-de1b-4833-8eff-17d53852265d" />

<img width="1918" height="1012" alt="Image" src="https://github.com/user-attachments/assets/db61de40-4d2f-4483-8729-4f061741799d" />

<img width="1915" height="1015" alt="Image" src="https://github.com/user-attachments/assets/f79b13ba-50a9-4c48-9daf-3228b368d0a0" />

---

> **Thank you for reviewing my project!**
