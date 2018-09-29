const express = require('express');
const router = express.Router();

//Player Model
const Player = require('../../models/Player');

// @Route GET api/players
// @desc Get all players for a user
router.get('/', (req, res) => {
    //const currentUser = req.user;
    Player.find()
        .sort({ name: -1 })
        .then(players => res.json(players))
});

// @Route POST api/players
// @desc Post new players related to current user
router.post('/', (req, res) => {
    const newPlayer = new Player({
        name: req.body.name
    });

    newPlayer.save().then(player => res.json(player));
});

module.exports = router;