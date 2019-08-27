import React, { createContext, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Notes from './views/Notes'
import TopBar from './components/TopBar';
import Register from './components/Register';
import Login from './components/Login';
import { useQuery } from 'react-apollo';
import { ME_QUERY } from './views/Users/queries';


export interface UserContext {
  isAuthenticated: boolean
  username?: string
}
const defaultContext = {
  isAuthenticated: false,
  username: undefined
}
export const { Provider, Consumer } = createContext<UserContext>(defaultContext); 

const App = () =>  {
  const { data, loading } = useQuery(ME_QUERY, {
    variables: {
      token: localStorage.getItem('token')
    }
  })
  const [userContext, setUserContext] = useState(defaultContext)
  
  useEffect(() => {
    if (!loading && data && data.me && data.me.username)  {
      setUserContext({
        isAuthenticated: true,
        username: data.me.username
      })
    }
  }, [data])

  return (
    <Provider value={userContext}>
      <Router>
        <TopBar />
        <Route exact path="/" component={Notes} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Router>
    </Provider> 
  ) 
}


export default App;
