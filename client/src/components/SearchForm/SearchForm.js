import React from 'react';
import { Button, FormControl, Form, FormGroup } from 'react-bootstrap';

const SearchForm = props => {
    return(
        <Form inLine>
          <FormGroup>
            <FormControl
            name="searchPlayer"
            id="formControlsText"
            type="text"
            label="Text"
            placeholder="Enter Player"
            onChange={props.handleInputChange}
            />
          </FormGroup>
            <Button bsStyle="primary" onClick={props.handleFormSubmit}>Add</Button>
        </Form>
    )
}

export default SearchForm;

