const router = require("express").Router();
const playerRoutes = require("./players");
const scraperRoutes = require("./scraper");

// Player routes
router.use("/players", playerRoutes);

// Scraper routes
router.use("/scraper", scraperRoutes);

module.exports = router;
