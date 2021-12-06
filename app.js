var express = require('express');
const app = express();

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.get("/favicon.ico", (req, res)=>{
    res.sendFile(__dirname + "/favicon.ico");
});

app.listen(process.env.PORT || 80, (err)=>{
    if (err)
        throw err;
    
    console.log("started");
});