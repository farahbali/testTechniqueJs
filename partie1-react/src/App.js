import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskPage from './views/TaskPage';
import LoginPage from './views/LoginPage';
import SignupPage from './views/SignupPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TaskPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
}

export default App;
