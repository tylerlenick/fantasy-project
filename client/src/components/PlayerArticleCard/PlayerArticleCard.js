import React from 'react';
import { Panel } from 'react-bootstrap';

const PlayerArticleCard = props => {
    return(
        <div>
            {props.playerArticles.map(article => {
                return(
                    <div>
                        <Panel>
                            <Panel.Heading>
                            <Panel.Title componentClass="h3">{article.title}</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body>{article.text}</Panel.Body>
                        </Panel>

                        <br/>
                    </div>
                )
            })}
        </div>
    )
}

export default PlayerArticleCard;