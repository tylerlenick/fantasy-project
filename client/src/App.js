import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';

const App = () => (
  <Router>
    <div>
      <Nav />
    </div>
  </Router>
);


export default App;
