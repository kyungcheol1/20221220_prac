const express = require("express");
const route = express.Router();
const items = [
    {
        subject : "첫번째 제목",
        name : "첫번째 작성자",
        content : "첫번째 내용"
    }
]


route.get("/list", (req, res) => {
    res.render("gallery/list.html",{items})
});

route.get("/write", (req, res) => {
    res.render("gallery/write")
});

route.post("/write",(req,res)=>{
    const {content,subject,name} = req.body;
    items.push({content,subject,name});
    res.redirect(`view?index=${items.length-1}`)
})


route.get("/modify", (req, res) => {
    const {index} = req.query;
    const item = {
        ...items[index],
        index
    }
    res.render("gallery/modify",{item});
});

route.post("/modify",(req,res)=>{
    const {index,subject,name,content} = req.body
    items[index].subject = subject
    items[index].name = name
    items[index].content = content
    res.redirect(`./view?index=${index}`)
})

route.get("/delete", (req, res) => {
    const {index} = req.query
    items.splice(index,1);
    res.redirect("list")
});

route.get("/view", (req, res) => {
    const {index} = req.query;
    const item = {
        ...items[index],
        index
    }
    res.render("gallery/view",{item})

});

module.exports = route;
