const router = require("express").Router();
const playerRoutes = require("./player");

// Book routes
router.use("/player", playerRoutes);

module.exports = router;
