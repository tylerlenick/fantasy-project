const router = require("express").Router();
const playerRoutes = require("./players");
const scraperRoutes = require("./scraper");
const authRoutes = require("./authRoutes");

// Player routes
router.use("/players", playerRoutes);

// Scraper routes
router.use("/scraper", scraperRoutes);

// Auth Routes
//router.use("/auth", authRoutes);


module.exports = router;
