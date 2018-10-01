const express = require('express');
const router = express.Router();

// Player Model
const Player = require('../../models/Player');

// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get('/', (req, res) => {
  Player.find()
    .sort({ date: -1 })
    .then(players => res.json(players));
});

// @route   POST api/items
// @desc    Create An Item
// @access  Public
router.post('/', (req, res) => {
  const newPlayer = new Player({
    name: req.body.name
  });

  newPlayer.save().then(player => res.json(player));
});

// @route   DELETE api/items/:id
// @desc    Delete A Item
// @access  Public
router.delete('/:id', (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;