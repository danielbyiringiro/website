import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';
const Routes = () => {
  return (
    <Router>
      <Route path="/register" component={RegisterView} />
      <Route path="/login" component={LoginView} />
    </Router>
  );
};
export default Routes;


