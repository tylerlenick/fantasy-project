import React from 'react';
import { Panel } from 'react-bootstrap';
import DeleteBtn from '../DeleteBtn';
import CheckBtn from '../CheckBtn';

const PlayerCard = props => {
    return(
        <div>
            {props.players.map(player => {
                return(
                    <div>
                          <Panel key={player._id}>
                            <Panel.Body>
                            <CheckBtn onClick={() => {props.searchPlayerArticle(player.name)}}
                            />
                                {player.name}
                            <DeleteBtn onClick={() => {props.handleDelete(player._id)}}
                            />
                            </Panel.Body>
                          </Panel>
                    </div>
                )
            })}
        </div>
    )
}

export default PlayerCard;