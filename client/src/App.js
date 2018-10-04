import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import 'bootstrap/dist/css/boostrap.min.css';
import './App.css';
import Nav from './components/Nav';
import TeamBar from './components/TeamBar';
import SourceTab from './components/SourceTab';
import { Grid, Col, Row } from "react-bootstrap";

const App = () => (
  <container>
      <Nav />
    <Grid>
      <Row>
        <Col xs={6} md={4} >
          <TeamBar />
        </Col>

        <Col xs={12} md={8} >
          <SourceTab />
        </Col>
      </Row>
    </Grid>
  </container>
);


export default App;
