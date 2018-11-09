import axios from "axios";

export default {
  // Gets all players
  getPlayers: function() {
    return axios.get("/api/players");
  },
  // Deletes the player with the given id
  deletePlayer: function(id) {
    return axios.delete("/api/players/" + id);
  },
  // Saves a player to the database
  savePlayer: function(playerData) {
    return axios.post("/api/players", playerData);
  },

  getFantasyPros: function(players) {
    return axios.post("/api/scraper/", players);
  },

  getAllArticles: function() {
    return axios.get("/api/scraper");
  },

  //Search for a user
  getUser: function(id) {
    return axios.get("/api/user/" + id);
  },

  createUser: function(newUser) {
    return axios.post("/api/user", newUser);
  }
}


