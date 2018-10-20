import React from 'react';
import { Nav } from 'react-bootstrap';
import "./TeamBar.css";
import PlayerCard from '../PlayerCard';
import SearchForm from '../SearchForm';


const TeamBar = props => {


    return (
      <div className="TeamBar">
        <hr />
        <p>My Team</p>
        <Nav vertical>
         <br/>
            <SearchForm
                handleInputChange={props.handleInputChange}
                handleFormSubmit={props.handleFormSubmit}
            />
            <PlayerCard 
                players={props.players}
                handleDelete={props.handleDelete}
                searchPlayerArticle={props.searchPlayerArticle}
            />
        </Nav>
      </div>
    );
};

export default TeamBar;


