import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const LoginModal = props => {
    return(
       
        <Modal show={props.state.show} onHide={props.handleClose}>
            <Modal.Dialog>
                <Modal.Header>
                <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>One fine body...</Modal.Body>

                <Modal.Footer>
                <Button>Close</Button>
                <Button bsStyle="primary">Save changes</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </Modal>
        
    )
}


export default LoginModal;