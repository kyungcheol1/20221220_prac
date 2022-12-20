const express = require("express");
const route = express.Router();
const board = require("./board.route");
const gallery = require("./gallery.route");

route.use("/board", board);
route.use("/gallery", gallery);

module.exports = route;
