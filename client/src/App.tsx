import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Notes from './views/Notes'
import styled from 'styled-components';
import TopBar from './components/TopBar';

const AppWrapper = styled('div')`
`

const App: React.FC = () =>  (
  <AppWrapper>
    <TopBar />
    
    <Router>
      <Route exact={true} path="/" component={Notes} />
    </Router>
  </AppWrapper>  
)


export default App;
