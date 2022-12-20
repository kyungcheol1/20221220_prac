const express = require("express");
const app = express();
const route = require("./routes/index");
const nunjucks = require("nunjucks");

app.set("view engine", "html");
app.use(express.static("public"));
nunjucks.configure("views", { express: app });
app.use(express.urlencoded({ extended: false }));

app.use(route);

app.get("/", (req, res) => {
    res.render("index.html");
});

app.listen(3000, () => {
    console.log("server start");
});
