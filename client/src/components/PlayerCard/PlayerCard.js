import React from 'react';
import { Panel } from 'react-bootstrap';

const PlayerCard = props => {
    return(
        <div>
            {props.players.map(player => {
                return(
                    <div>
                          <Panel>
                            <Panel.Body>{player.name}</Panel.Body>
                          </Panel>
                    </div>
                )
            })}
        </div>
    )
}

export default PlayerCard;