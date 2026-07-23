const express = require("express");
const app = express();


let port = 3000;

app.listen(port, ()=>{
    console.log(`App is listening on port ${port}`)
})

app.get("/",(req,res)=>{
    res.send("You connected to root path")  
})
app.get("/:username/:id",(req,res)=>{
    console.log(req.params)
    res.send("Hello this is a req")
})

app.get("/search",(req,res)=>{
    let {q}=req.query;
    res.send(`No results${q}`);
})

// app.use((req,res)=>{
//     console.log("New incoming request");
//     let code = "<h1>Fruits</h1><ul><li>apple</li><li>orange</li>"
//     res.send(code);
// })