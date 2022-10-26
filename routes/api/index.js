const router = require("express").Router();
const debugFileRoutes = require("./debugFile");

// Book routes
router.use("/debugFile", debugFileRoutes);

module.exports = router;
