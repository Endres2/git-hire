import React from 'react';
import './App.css';
<<<<<<< HEAD
import HomePage from './Components/HomePage/HomePage';
=======

import UserProfile from './Components/UserProfile/UserProfile';

>>>>>>> ecd80a697a452feda1ef10ac09d1cd536dff33b7
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
<<<<<<< HEAD
          <Route path='/' exact component={HomePage}/>
=======
          <UserProfile/>
          <Route path='/' exact />
>>>>>>> ecd80a697a452feda1ef10ac09d1cd536dff33b7
          <Route path='/Form' component={Form} />
          <Route path='/HomePage' component={HomePage}/>
          <Route path='/JobSearch' component={JobSearch}/>
        </Switch>
      </Router>
    </>

  );
}

export default App;
