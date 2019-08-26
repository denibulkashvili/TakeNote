import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Notes from './views/Notes'
import styled from 'styled-components';
import TopBar from './components/TopBar';
import Register from './components/Register';
import Login from './components/Login';

const AppWrapper = styled('div')`
`

const App: React.FC = () =>  (
  <AppWrapper>
    <Router>
      <TopBar />
      <Route exact path="/" component={Notes} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
    </Router>
  </AppWrapper>  
)


export default App;
