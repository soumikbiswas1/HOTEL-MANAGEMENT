import './App.css';
import React from 'react';
import SignUp from './components/signup';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
import SignIn from './components/signin';
import Hotels from './components/hotels';
function App() {
  return (
    <Router>
    <Routes>
    <Route path="/signup" element={ <SignUp /> }/>
    <Route path="/signin" element={ <SignIn/> }/>
    <Route path="/" element= {<Hotels/>}/>
    </Routes>
    </Router> 
  );
}

export default App;
