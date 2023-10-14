import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TaskPage from './views/TaskPage';
import LoginPage from './views/LoginPage';
import SignupPage from './views/SignupPage';

function App() {
  return (
    <Router>
      <Route exact path="/" component={TaskPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignupPage} />
    </Router>
  );
}

export default App;
