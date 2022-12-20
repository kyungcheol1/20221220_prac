const express = require("express");
const route = express.Router();

route.get("/list", (req, res) => {
    res.send("gallery/ list 입니다");
});

route.get("/write", (req, res) => {
    res.send("gallery/ write 입니다");
});

route.get("/modify", (req, res) => {
    res.send("gallery/ modify");
});

route.get("/delete", (req, res) => {
    res.send("gallery/ delete");
});

route.get("/view", (req, res) => {
    res.send("gallery/ view");
});

module.exports = route;
