const router = require("express").Router();
const cheerio = require("cheerio");
const axios = require("axios");
const db = require("../../models");

router.get("/", (req, res) => {
    
    axios.get("https://www.fantasypros.com/nfl/player-news.php").then(function(response) {

        var $ = cheerio.load(response.data);

        $("div.player-news-item").each(function(i, element) {

            var result = {};

            result.title = $(this).children("a").text();
            result.link = $(this).children("a").attr("href");

            console.log($(this).children().eq(11).text());
                  // Create a new Article using the `result` object built from scraping
            /*db.Article.create(result)
            .then(function(dbArticle) {
                // View the added result in the console
                console.log(dbArticle);
            })
            .catch(function(err) {
                // If an error occurred, send it to the client
                return res.json(err);
            });*/

        });

        res.send("scrape complete");
    });
});

module.exports = router;