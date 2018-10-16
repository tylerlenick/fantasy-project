import React from 'react';
import { Nav, Button, Panel } from 'react-bootstrap';
import "./TeamBar.css";
import PlayerCard from '../PlayerCard';
//import { Module } from 'module';

const TeamBar = props => {
    return (
      <div className="TeamBar">
        <hr />
        <p>My Team</p>
        <Nav vertical>
        <form>
            <input
            id="formControlsText"
            type="text"
            label="Text"
            placeholder="Enter text"
            />
            <Button bsStyle="primary">Add</Button>
        </form> <br/>
            <PlayerCard 
                players={props.players}
            />
        </Nav>
      </div>
    );
};

export default TeamBar;


