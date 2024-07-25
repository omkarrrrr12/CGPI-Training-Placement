// src/components/Course.js
import React, { useEffect } from 'react';
import './Course.css';

const courses = [
  { name: 'Data Science', description: 'Learn about data analysis, machine learning, and more.' },
  { name: 'Fullstack Development', description: 'Become proficient in both frontend and backend development.' },
  { name: 'Web Development', description: 'Learn to build modern web applications.' },
  { name: 'React.js', description: 'Master the popular React library for building user interfaces.' },
  { name: 'AWS', description: 'Get skilled in Amazon Web Services for cloud computing.' },
  { name: 'Java', description: 'Learn Java programming language for backend development.' },
  { name: 'Django', description: 'Become an expert in Django framework for building web applications.' },
];

const Course = () => {
  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="courses-page">
      <h1>Available Courses</h1>
      <div className="courses-list">
        {courses.map((course, index) => (
          <div key={index} className="course">
            <h2>{course.name}</h2>
            <p>{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Course;
