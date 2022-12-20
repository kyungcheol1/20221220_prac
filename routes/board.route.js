const express = require("express");
const route = express.Router();

route.get("list", (req, res) => {
    res.send("board/ list 입니다");
});

route.get("/write", (req, res) => {
    res.send("board/ write 입니다");
});

route.get("/modify", (req, res) => {
    res.send("board/ modify");
});

route.get("/delete", (req, res) => {
    res.send("board/ delete");
});

route.get("/view", (req, res) => {
    res.send("board/ view");
});

module.exports = route;
