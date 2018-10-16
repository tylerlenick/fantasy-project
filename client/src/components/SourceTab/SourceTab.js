import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import ArticleCard from '../ArticleCard';

const SourceTab = props => {
        return (
            <div>
                <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
                    <Tab eventKey={1} title="All">
                            <br/>
                                     
                    </Tab>
                    <Tab eventKey={2} title="ESPN">
                            <br/>  
        
                    </Tab>
                    <Tab eventKey={3} title="Fantasy Pro's">
                            <br/>
                            <ArticleCard 
                                articles={props.articles}
                            />
                    </Tab>
                    <Tab eventKey={4} title="Rotoworld">
                            <br/>
                    </Tab>
                    <Tab eventKey={5} title="CBS">
                            <br/>
                    </Tab>
                </Tabs>
            </div>
        ) 
};




export default SourceTab;