const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.use(express.static(path.join(__dirname,"public")))
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"))


app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/roldice", (req, res) => {
    let diceValue = Math.floor(Math.random() * 6) + 1;
    res.render("roldice.ejs", { diceValue });  // also can use {diceValue: diceValue} as an argument
});
app.get("/ig/:username", (req, res) => {

    let { username } = req.params;
    let instaData = require("./data.json");
    let data = instaData[username];
    // console.log(data);
    if (data) {
        res.render("instagram.ejs", { data });
    } else {
        res.render("error.ejs");
    }});
app.listen(port, () => {
    console.log(`listing port ${port}`);
})