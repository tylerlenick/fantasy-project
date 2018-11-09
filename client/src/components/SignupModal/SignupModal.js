import React from 'react';
import { Modal, Button, FormGroup, ControlLabel, FormControl } from "react-bootstrap";

const SignupModal = props => {
    return(
            
        <Modal show={props.signupShow} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <form>
                <FormGroup>
                <ControlLabel>Username</ControlLabel>
                <FormControl
                    type="text"
                    value={props.value}
                    placeholder="Enter Username"
                    onChange={props.handleChange}
                />
                <FormControl.Feedback />
                <br/>
                <ControlLabel>Password</ControlLabel>
                <FormControl
                    type="password"
                    value={props.value}
                    placeholder="Enter Password"
                    onChange={props.handleChange}
                />
                <FormControl.Feedback />
                </FormGroup>
            </form>
            </Modal.Body>
            <Modal.Footer>
                <Button bsStyle="primary" onClick={props.handleLogin}>Login</Button>
                <Button onClick={props.handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>

    )
}


export default SignupModal;