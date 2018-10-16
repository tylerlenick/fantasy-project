import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Nav from './components/Nav';
import TeamBar from './components/TeamBar';
import SourceTab from './components/SourceTab';
import { Grid, Col, Row } from "react-bootstrap";
import Main from "./pages/Main";

const App = () => (
  <container>
    <Main />
  </container>
);


export default App;
