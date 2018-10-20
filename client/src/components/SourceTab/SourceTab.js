import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import ArticleCard from '../ArticleCard';
import PlayerArticleCard from '../PlayerArticleCard';

const SourceTab = props => {
        return (
            <div>
                <Tabs activeKey={props.key} id="uncontrolled-tab-example" onSelect={props.handleSelect}>
                    <Tab eventKey={1} title="Main Feed">
                            <br/>
                            <ArticleCard
                                articles={props.articles}
                            />
                                     
                    </Tab>
                    <Tab eventKey={2} title="Player Feed">
                            <br/>
                            <PlayerArticleCard 
                                playerArticles={props.playerArticles}
                            />  
        
                    </Tab>
                </Tabs>
            </div>
        ) 
};




export default SourceTab;