const router = require("express").Router();
const cheerio = require("cheerio");
const axios = require("axios");
//const db = require("../../models");

router.post("/", (req, res) => {
    const playerArr = req.body
    let articleArr = [];

    for (let i = 0; i < playerArr.length; i++) { 

        const result = {};
        const player = playerArr[i].name.replace(" ", "-").toLowerCase();
            axios.get("https://www.fantasypros.com/nfl/news/" + player + ".php").then(function(response) {

                const $ = cheerio.load(response.data);
                 
                $(".content").each(function() {

                    result.title = $(this).first("a").text();
                    articleArr.push(response);
                    
                    //console.log(articleArr);
                    //res.json(result);

                })
            })
        //res.json(result);
    }
    //console.log(articleArr);
})

module.exports = router;