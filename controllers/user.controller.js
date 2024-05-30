const Listing = require("../models/Listing.model.js");
const { errorHandler } = require("../utils/error.js");

const test = (req, res, next) => {
  res.json({ message: "All good in here s" });
};

const getUserListings = async (req, res, next) => {
  if (req.user.id === req.params.id) {
    try {
      const listings = await Listing.find({ userRef: req.params.id });
      res.status(200).json(listings);
    } catch (error) {
      next(error);
    }
  } else {
    3;
    return next(errorHandler(401, "You can only view your own listings!"));
  }
};

module.exports = { test, getUserListings };
