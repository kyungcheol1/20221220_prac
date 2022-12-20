const express = require("express");
const route = express.Router();
const list = [{ title: "첫번째 글", writer: "1등", content: "1등" }];

route.get("/list", (req, res) => {
    res.render("board/list.html", { list });
});

route.get("/write", (req, res) => {
    res.render("board/write.html");
});

route.post("/write", (req, res) => {
    const { title, writer, content } = req.body;
    list.push({ title, writer, content });
    res.redirect(`view?index=${list.length - 1}`);
});

route.get("/modify", (req, res) => {
    const { index } = req.query;
    const item = {
        ...list[index],
        index,
    };
    res.render("board/modify.html", { item });
});

route.post("/modify", (req, res) => {
    const { index, ...items } = req.body;
    list[index] = items;
    res.redirect(`view?index=${index}`);
});

route.get("/delete", (req, res) => {
    const { index } = req.query;
    list.splice(index, 1);
    res.redirect("list");
});

route.get("/view", (req, res) => {
    const { index } = req.query;
    const item = {
        ...list[index],
        index,
    };
    res.render("board/view.html", { item });
});
module.exports = route;
