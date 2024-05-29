const Listing = require("../models/Listing.model.js");

const createListing = async (req, res, next) => {
  try {
    const listing = await Listing.create(req.body);
    return res.status(201).json(listing);
  } catch (error) {
    error(next);
  }
};

module.exports = { createListing };
