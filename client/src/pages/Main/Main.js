import React, { Component } from 'react';
import '../../App.css';
import Nav from '../../components/Nav';
import TeamBar from '../../components/TeamBar';
import SourceTab from '../../components/SourceTab';
import SearchForm from '../../components/SearchForm';
import ArticleCard from '../../components/ArticleCard';
import { Grid, Col, Row, Modal, Button } from "react-bootstrap";
import API from "../../utils/API";


    class Main extends Component {
        state = {
          articles: [],
          playerArticles: [],
          players: [],
          currentPlayer: "",
          searchPlayer: "",
          key: 1,
          show: false
        }
        
        componentDidMount() {

            API.getPlayers()
            .then(players => {
                this.setState({
                    players: players.data
                })
                
                //setTimeout(function(){console.log(Main.state.articles)}, 10000);      
            })


            API.getAllArticles()
                .then(articles => {
                    this.setState({
                        articles: articles.data
                    })
            })
            
            console.log(this.state.key);
        };

        /*componentDidUpdate() {
            const player = {
                name: this.state.currentPlayer
            }
            console.log(this.state.key);
            /*if( this.state.key = 2) {
                API.getFantasyPros(player)
                .then(articles => {
                    this.setState({
                        articles: articles.data
                    })
                })
            }
         }*/

        getPlayerArticles = player => {
            API.getFantasyPros(player)
                .then(articles => {
                    this.setState({
                        articles: articles.data
                    })
            })
        }
        handleFormSubmit = event => {
            event.preventDefault();
        
            API.savePlayer({
                name: this.state.searchPlayer,
            })
            .then(res => API.getPlayers())
                .then(players => {
                    this.setState({
                        players: players.data
                    })
                }).catch(err => console.log(err));
        };

        handleInputChange = event => {
            const { name, value } = event.target;
            this.setState({
                [name]: value
            });
        };

        handleDelete = id => {
            API.deletePlayer(id)
            .then(res => API.getPlayers())
            .then(players => {
                this.setState({
                    players: players.data
                })
            })
            .catch(err => console.log(err));
        };

        getMainFeed = event => {
            event.preventDefault();
            API.getAllArticles()
            .then(articles => {
                this.setState({
                    articles: articles.data
                })

            })
        }

        handleSelect = key => {
            this.setState({ key })    
        }

        handleClose = () => {
            this.setState({ show: false });
        }
        
        handleShow = () => {
            this.setState({ show: true });
        }
        
        searchPlayerArticle = (player) => {
            const objPlayer = {
                name: player
            }
            console.log(player);
            console.log("testing");
            API.getFantasyPros(objPlayer)
            .then(articles => {
                this.setState({
                    playerArticles: articles.data
                })

            })
        }

        
        render() {
            return(
                <container>
                     <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
         

                        <h4>Overflowing text to show scroll behavior</h4>
                        <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                        ac consectetur ac, vestibulum at eros.
                        </p>
                        <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur
                        et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                        auctor.
                        </p>
                        <p>
                        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                        cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
                        dui. Donec ullamcorper nulla non metus auctor fringilla.
                        </p>
                        <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                        ac consectetur ac, vestibulum at eros.
                        </p>
                        <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur
                        et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                        auctor.
                        </p>
                        <p>
                        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                        cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
                        dui. Donec ullamcorper nulla non metus auctor fringilla.
                        </p>
                        <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                        ac consectetur ac, vestibulum at eros.
                        </p>
                        <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur
                        et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                        auctor.
                        </p>
                        <p>
                        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                        cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
                        dui. Donec ullamcorper nulla non metus auctor fringilla.
                        </p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.handleClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                    <Nav 
                        handleShow={this.handleShow}
                    />
                    <Grid>
                    <Row>
                        <Col xs={6} md={4} >
                        <TeamBar 
                            players={this.state.players} 
                            handleInputChange={this.handleInputChange}
                            handleFormSubmit={this.handleFormSubmit} 
                            handleDelete={this.handleDelete}
                            searchPlayerArticle={this.searchPlayerArticle}
                        />

                        </Col>

                        <Col xs={12} md={8} >
                        <SourceTab 
                            articles={this.state.articles}
                            playerArticles={this.state.playerArticles}
                            handleSelect={this.handleSelect}
                            activeKey={this.state.key}
                            
                        />
                        
                        </Col>
                    </Row>
                    </Grid>
                </container>
            )
        }
};


export default Main;


