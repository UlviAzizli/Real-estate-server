const { test, getUserListings } = require("../controllers/user.controller.js");
const { verifyToken } = require("../utils/verifyUser.js");

const router = require("express").Router();

router.get("/test", test);
router.get("/listing/:id", verifyToken, getUserListings);

module.exports = router;
