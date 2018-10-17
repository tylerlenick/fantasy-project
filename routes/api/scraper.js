const router = require("express").Router();
const cheerio = require("cheerio");
const axios = require("axios");
const db = require("../../models");

router.get("/:players", (req, res) => {
    //const playerArr = req.params.map(player => player.name);
    const playerArr = JSON.stringify(req.params.players);
    console.log(playerArr);
    
    //for (let i = 0; i < playerArr.length; i++) {

        //const player = playerArr[i].replace(" ", "-");
        //console.log(player);
        axios.get("https://www.fantasypros.com/nfl/player-news.php").then(function(response) {

            const $ = cheerio.load(response.data);
            const articleArr = []; 
            $(".player-news-header").each(function(i, element) {

                var result = {};

                result.title = $(this).first("a").text();

                articleArr.push(result);

            });

            res.json(articleArr);

            //res.send("scrape complete");
        });
    //}*/
});

module.exports = router;