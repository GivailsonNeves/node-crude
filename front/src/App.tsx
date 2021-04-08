import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login, {Login2, Login3List} from './pages/Login';
import List  from './pages/List';

import './App.css';

const listss: string[] = ['givailson', 'junior', 'julio', 'db', 'db'];

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/list">List</Link>
          </li>
        </ul>
      </nav>
      <Login2 fontSize={28} text="givailson">
        <p>adflkjaskjas</p>
        <p>adflkjaskjas</p>
        <p>adflkjaskjas</p>
        <p>adflkjaskjas</p>
        <p>adflkjaskjas</p>
        <p>adflkjaskjas</p>
      </Login2>
      <hr />
      <Login3List listNames={listss} />
      <div className="App">
        <Switch>
          <Route path="/" exact={true} >
            <Login />
          </Route>
          <Route path="/list">
            <List />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
