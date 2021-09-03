import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Form from './Components/pages/Form';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact />
          <Route path='/Form' component={Form} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
