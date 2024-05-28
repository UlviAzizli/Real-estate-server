const { google, signup, signin } = require("../controllers/auth.controller.js");

const router = require("express").Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/google", google);

module.exports = router;
