const router = require("express").Router();
const cheerio = require("cheerio");
const axios = require("axios");
//const db = require("../../models");

router.post("/", (req, res) => {
    const player = req.body.name.replace(" ", "-").toLowerCase();
    let articleArr = [];
    //let x = 0;
    console.log(player);
    //for (let i = 0; i < playerArr.length; i++) { 
    
        //const player = playerArr[i].name.replace(" ", "-").toLowerCase();
        axios.get("https://www.fantasypros.com/nfl/news/" + player + ".php").then(function(response) {

                const $ = cheerio.load(response.data);
                //console.log($(".inner").children(".subsection"));
                $(".inner").children(".subsection").each(function(i, element) {
                    const result = {};
                    //console.log($(".subsection.feature-stretch").html());
                    result.title = $(this).children(".body-row").children(".content").children("a").children("b").text();
                    result.text = $(this).children(".body-row").children(".content").children("p:nth-child(4)").text();
                    console.log(result.content);
                    //result.content = $(this).chl
                    articleArr.push(result);
                    //console.log(result);
                    //console.log(articleArr);
                    //res.json(result);

                })
                /*x++;
                console.log(x);*/
            //console.log(articleArr);
            res.json(articleArr);
            //console.log(articleArr);

        })

        
        //console.log(x);
        //res.json(result);
    //}
    //console.log('about to wait');
    //setTimeout(function(){console.log(articleArr); console.log('done waiting')}, 10000);
    


    // while (x < playerArr.length) {
    //     console.log("About to Wait");
    //     setTimeout(function(){console.log(x);}, 3000);
    //     console.log("wait over");
    // };

    
})

router.get("/", (req, res) => {

    let articleArr = [];

    axios.get("http://www.rotoworld.com/playernews/nfl/football-player-news").then(function(response) {

        const $ = cheerio.load(response.data);

        $(".RW_pn").children(".pb").each(function(i, element) {

            const result= {};

            result.title = $(this).children().children(".report").text();
            result.text = $(this).children().children(".impact").text();
            result.date = $(this).children().children(".info").children(".date").text();
            articleArr.push(result);
        })
        console.log(articleArr);
        res.json(articleArr);
    })
})

module.exports = router;

/*<div id="cp1_ctl00_rptBlurbs_floatingcontainer_0" style="width:460px; float:left;">
        <div class="report">
            <p>Christian Kirk caught 3-of-6 targets for 57 yards in the Cardinals' Week 7 loss to the Broncos.</p>
        </div>
        <div class="impact">
             Both Josh Rosen and OC Mike McCoy seemed to lose track of Kirk for long stretches of time. He still ended up clearing 50 yards for the third-straight game, and fourth in five. Producing ahead of Larry Fitzgerald for most of the season, Kirk's WR4 appeal for Week 8 will be enhanced if the Cardinals fire McCoy, as is looking likely.
        </div>
        <div class="info">
             <div class="related"></div>
             <div class="clearboth"> </div>
             <div class="source"></div><div class="date">Oct 19 - 12:21 AM</div>
        </div>
        </div>*/