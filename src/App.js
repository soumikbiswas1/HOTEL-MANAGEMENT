import './App.css';
import React from 'react';
import SignUp from './components/signup';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
import SignIn from './components/signin';
import SearchAppBar from './components/navbar';
function App() {
  return (
    <Router>
    <Routes>
    <Route path="/signup" element={ <SignUp /> }/>
    <Route path="/signin" element={ <SignIn/> }/>
    <Route path="/" element= { <SearchAppBar/>}/>
    </Routes>
    </Router> 
  );
}

export default App;
