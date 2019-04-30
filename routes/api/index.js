const path = require("path");
const router = require("express").Router();
const userRoutes = require("./users");

//User Routes
router.use("/users", userRoutes);
// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
