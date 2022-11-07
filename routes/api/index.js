const router = require("express").Router();
const debugFileRoutes = require("./debugFile");

router.use("/debugFile", debugFileRoutes);

module.exports = router;
