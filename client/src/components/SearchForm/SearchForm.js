import React from 'react';
import { Button } from 'react-bootstrap';

const SearchForm = props => {
    return(
        <form>
            <input
            id="formControlsText"
            type="text"
            label="Text"
            placeholder="Enter Player"
            onChange={props.handleInputChange}
            />
            <Button bsStyle="primary" onClick={props.handleFormSubmit}>Add</Button>
        </form>
    )
}

export default SearchForm;