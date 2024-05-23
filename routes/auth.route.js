const { signup } = require("../controllers/auth.controller.js");

const router = require("express").Router();

router.post("/signup", signup);
