import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";

import Login from './pages/Login';
import Register from './pages/Register';

import './App.css';
import Main from './template/Main';

function AppContainer() {

  const history = useHistory();

  useEffect(() => {
    function checkLogin() {
      const token = window.localStorage.getItem('user-token');
      if (!token) {
        history.replace('/login');
      } else {
        history.replace('/');
      }
    }
    checkLogin();
  }, [history])

  return (
    <Switch>
      <Route exact={true} path="/login" component={Login} />
      <Route exact={true} path="/signin" component={Register} />
      <Route path="/" component={Main} />
    </Switch>
  );
}

const App = () => <Router><AppContainer /></Router>;

export default App;
