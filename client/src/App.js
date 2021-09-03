import React from 'react';
import './App.css';
import UserProfile from './Components/UserProfile/UserProfile';
// import Navbar from './Components/Navbar/Navbar';
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <UserProfile/>
      </header>     
    </div>
    // <>
    //   <Router>
    //     <Navbar />
    //   </Router>
    // </>
  );
}

export default App;
