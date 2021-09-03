import React from 'react';
import './App.css';

import UserProfile from './Components/UserProfile/UserProfile';

import Navbar from './Components/Navbar/Navbar';
import Form from './Components/pages/Form';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



function App() {
  return (

    <>
      <Router>
        <Navbar />
        <Switch>
          <UserProfile/>
          <Route path='/' exact />
          <Route path='/Form' component={Form} />
        </Switch>
      </Router>
    </>

  );
}

export default App;
