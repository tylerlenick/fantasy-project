const router = require("express").Router();
const playersController = require("../../controllers/playersController");

// Matches with "/api/players"
router.route("/")
  .get(playersController.findAll)
  .post(playersController.create);

// Matches with "/api/players/:id"
router
  .route("/:id")
  .get(playersController.findById)
  .put(playersController.update)
  .delete(playersController.remove);

/*router.post("/", (req, res) => {
  const player = req.body;
  //const searchablePlayer = player.replace(" ", "-").toLowerCase();
  playersController.create(player);
  
  axios.get("https://fd7bcee7-cd48-4fbb-875b-3be411:fender33@api.mysportsfeeds.com/v1.2/pull/nfl/2018-regular/active_players.json?player=" + searchablePlayer).then(function(response, err) {
    if (err) {
      throw err;
    } else {
      playersController.create
    }
  })

})*/

module.exports = router;
