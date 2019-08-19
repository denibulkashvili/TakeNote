import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Notes from './views/Notes'

const App: React.FC = () => {
  return (
    <Router>
      <Route exact={true} path="/" component={Notes} />
    </Router>
  );
}

export default App;
