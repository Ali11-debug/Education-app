import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);
  const [progress, setProgress] = useState({});
  
  const addCourse = (course) => setCourses([...courses, course]);
  const updateProgress = (courseId, newProgress) => {
    setProgress({ ...progress, [courseId]: newProgress });
  };

  return (
    <AppContext.Provider value={{ courses, progress, addCourse, updateProgress }}>
      {children}
    </AppContext.Provider>
  );
};
