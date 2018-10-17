import React from 'react';
import { Nav } from 'react-bootstrap';
import "./TeamBar.css";
import PlayerCard from '../PlayerCard';
import SearchFrom from '../SearchForm';
import API from "../../utils/API";

const TeamBar = props => {


    return (
      <div className="TeamBar">
        <hr />
        <p>My Team</p>
        <Nav vertical>
         <br/>
            <SearchFrom
                handleInputChange={props.handleInputChange}
                handleFormSubmit={props.handleFormSubmit}
            />
            <PlayerCard 
                players={props.players}
            />
        </Nav>
      </div>
    );
};

export default TeamBar;


