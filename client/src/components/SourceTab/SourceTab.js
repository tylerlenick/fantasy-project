import React from 'react';
import { Tabs, Tab, Panel } from 'react-bootstrap';

const SourceTab = () => (
    <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
        <Tab eventKey={1} title="All">
            <br/>
            <Panel>
                <Panel.Heading>
                <Panel.Title componentClass="h3">Panel heading with a title</Panel.Title>
                </Panel.Heading>
                <Panel.Body>Panel content</Panel.Body>
            </Panel>

            <br/>

            <Panel>
                <Panel.Heading>
                <Panel.Title componentClass="h3">Panel heading with a title</Panel.Title>
                </Panel.Heading>
                <Panel.Body>Panel content</Panel.Body>
            </Panel>
        </Tab>
        <Tab eventKey={2} title="ESPN">  
        </Tab>
        <Tab eventKey={3} title="Tab 3">
        </Tab>
        <Tab eventKey={4} title="Tab 4">
        </Tab>
        <Tab eventKey={5} title="Tab 5">
        </Tab>
    </Tabs>
);

export default SourceTab;