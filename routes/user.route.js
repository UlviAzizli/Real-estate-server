const {
  test,
  getUserListings,
  updateUser,
} = require("../controllers/user.controller.js");
const { verifyToken } = require("../utils/verifyUser.js");

const router = require("express").Router();

router.get("/test", test);
router.post("/update/:id", verifyToken, updateUser);
router.get("/listings/:id", verifyToken, getUserListings);

module.exports = router;
