const router = require("express").Router();
const cheerio = require("cheerio");
const axios = require("axios");
const db = require("../../models");

router.get("/", (req, res) => {
    
    axios.get("https://www.fantasypros.com/nfl/player-news.php").then(function(response) {

        const $ = cheerio.load(response.data);
        const articleArr = []; 
        $(".player-news-header").each(function(i, element) {

            var result = {};

            result.title = $(this).first("a").text();
            //result.link = "test";

            // Create a new Article using the `result` object built from scraping
            /*db.Article.create(result)
            .then(function(dbArticle) {
                // View the added result in the console
                console.log(dbArticle);
            })
            .catch(function(err) {
                // If an error occurred, send it to the client
                console.log(err);
            });*/

            articleArr.push(result);

        });

        res.json(articleArr);

        res.send("scrape complete");
    });
});

module.exports = router;