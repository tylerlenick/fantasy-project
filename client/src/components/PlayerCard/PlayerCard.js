import React from 'react';
import { Panel } from 'react-bootstrap';
import DeleteBtn from '../DeleteBtn';

const PlayerCard = props => {
    return(
        <div>
            {props.players.map(player => {
                return(
                    <div>
                          <Panel>
                            <Panel.Body>{player.name} 
                            <DeleteBtn 
                            onClick = {props.handleDelete}
                            /></Panel.Body>
                            
                          </Panel>
                    </div>
                )
            })}
        </div>
    )
}

export default PlayerCard;