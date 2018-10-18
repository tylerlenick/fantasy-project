import React, { Component } from 'react';
import '../../App.css';
import Nav from '../../components/Nav';
import TeamBar from '../../components/TeamBar';
import SourceTab from '../../components/SourceTab';
import SearchForm from '../../components/SearchForm';
import ArticleCard from '../../components/ArticleCard';
import { Grid, Col, Row } from "react-bootstrap";
import API from "../../utils/API";



    class Main extends Component {
        state = {
          articles: [],
          players: [],
          searchPlayer: ""
        }
        
        componentWillMount() {

            API.getPlayers()
            .then(players => {
                this.setState({
                    players: players.data
                })
                API.getFantasyPros(this.state.players)
                .then(articles => {
                this.setState({
                    articles: articles.data
                })
                //console.log(this.state.articles);
                console.log(this.state.players);
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

        handleInputChange = event => {
            const { name, value } = event.target;
            this.setState({
                [name]: value
            });
        };

        handleDelete = id => {
            API.deletePlayer(id)
            .then(res => this.getPlayers())
            .catch(err => console.log(err));
        };

      
        /*articleScraper = () => {
          console.log("Article scraper")
          API.getFantasyPros()
          .then(articles => {
            this.setState({
              articles: articles.data
            })
            console.log(this.state.articles);
          })
        }*/
      
        /*saveArticle = event => {
      
          const userId = localStorage.getItem("userId")
          event.preventDefault();
          const article = {
            title: this.title,
            summary: this.summary,
            link: this.link,
            image: this.image,
            userId: userId
          }
          console.log(article)
          // API.saveArticle()
        }*/

        render() {
            return(
                <container>
                    <Nav />
                    <Grid>
                    <Row>
                        <Col xs={6} md={4} >
                        <TeamBar 
                            players={this.state.players} 
                            handleInputChange={this.handleInputChange}
                            handleFormSubmit={this.handleFormSubmit} 
                            handleDelete={this.handleDelete}
                        />

                        </Col>

                        <Col xs={12} md={8} >
                        <SourceTab 
                            articles={this.state.articles}
                        />
                        
                        </Col>
                    </Row>
                    </Grid>
                </container>
            )
        }
};


export default Main;
