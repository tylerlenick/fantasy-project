import React, { Component } from 'react';
import '../../App.css';
import Nav from '../../components/Nav';
import TeamBar from '../../components/TeamBar';
import SourceTab from '../../components/SourceTab';
import LoginModal from '../../components/LoginModal';
import SignupModal from '../../components/SignupModal';
import { Grid, Col, Row, Modal, Button, FormGroup, ControlLabel, FormControl } from "react-bootstrap";
import API from "../../utils/API";



    class Main extends Component {
        state = {
          articles: [],
          playerArticles: [],
          players: [],
          currentPlayer: "",
          searchPlayer: "",
          key: 1,
          currentUser: "",
          loginShow: false,
          signupShow: false,
        }
        
        componentDidMount() {

            API.getPlayers()
            .then(players => {
                this.setState({
                    players: players.data
                })
            })


            API.getAllArticles()
                .then(articles => {
                    this.setState({
                        articles: articles.data
                    })
            })
            
            console.log(this.state.key);
        };

        getPlayerArticles = player => {
            API.getFantasyPros(player)
                .then(articles => {
                    this.setState({
                        articles: articles.data
                    })
            })
        };
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

        handleSignup = event => {
            event.preventDefault();

            //POST to user table

        };

        handleLogin = event => {
            event.preventDefault();

            API.getUser
        }

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
            this.setState({ 
                loginShow: false,
                signupShow: false 
            });
        }
        
        handleLoginShow = () => {
            this.setState({ loginShow: true });
        }

        handleSignupShow = () => {
            this.setState({ signupShow: true });
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
                    <LoginModal
                        loginShow={this.state.loginShow}
                        handleClose={this.handleClose}
                        value={this.state.value}
                        handleChange={this.handleChange}
                        handleLogin={this.handleLogin}
                    />
                    <SignupModal
                        show={this.state.signupShow}
                    />
                    <Nav 
                        handleLoginShow={this.handleLoginShow}
                        handleSignupShow={this.handleSignupShow}
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


