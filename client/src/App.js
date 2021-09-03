import React from 'react';
import './App.css';
import HomePage from './Components/HomePage/HomePage';
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
          <Route path='/' exact component={HomePage}/>
          <Route path='/Form' component={Form} />
          <Route path='/HomePage' component={HomePage}/>
          <Route path='/JobSearch' component={JobSearch}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
