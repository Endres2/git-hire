import React from 'react';
import './App.css';

import UserProfile from './Components/UserProfile/UserProfile';

import Navbar from './Components/Navbar/Navbar';
import Form from './Components/pages/Form';
import JobSearch from './Components/JobSearch/JobSearch';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import route from 'color-convert/route';



function App() {
  return (

    <>
      <Router>
        <Navbar />
        <Switch>
          <UserProfile/>
          <Route path='/' exact />
          <Route path='/Form' component={Form} />
          <Route path='/HomePage' component={HomePage}/>
          <Route path='/JobSearch' component={JobSearch}/>
        </Switch>
      </Router>
    </>

  );
}

export default App;
