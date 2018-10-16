import React from 'react';
import { Panel } from 'react-bootstrap';

const ArticleCard = props => {
    return(
        <div>
            {props.articles.map(article => {
                return(
                    <div>
                        <Panel>
                            <Panel.Heading>
                            <Panel.Title componentClass="h3">{article.title}</Panel.Title>
                            </Panel.Heading>
                            <Panel.Body>Panel content</Panel.Body>
                        </Panel>

                        <br/>
                    </div>
                )
            })}
        </div>
    )
}

export default ArticleCard;