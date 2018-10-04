const express = require('express');
const router = express.Router();
const playerController = require("../../controllers/playerController");

// Player Model
//const Player = require('../../models/Player');

// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.route("/")
  .get(playerController.findAll)
  .post(playerController.create);



// @route   DELETE api/items/:id
// @desc    Delete A Item
// @access  Public
router.delete('/:id', (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;