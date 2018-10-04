import React from 'react';
import { Nav, Button, Panel } from 'react-bootstrap';
import "./TeamBar.css";

export default class TeamBar extends React.Component {
  render() {
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
        <Panel>
            <Panel.Body>Basic panel example</Panel.Body>
        </Panel>
        <Panel>
            <Panel.Body>Basic panel example</Panel.Body>
        </Panel>
        <Panel>
            <Panel.Body>Basic panel example</Panel.Body>
        </Panel>
        <Panel>
            <Panel.Body>Basic panel example</Panel.Body>
        </Panel>
        <Panel>
            <Panel.Body>Basic panel example</Panel.Body>
        </Panel>
        </Nav>
      </div>
    );
  }
}

