var express = require('express');
const app = express();

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.listen(80, (err)=>{
    if (err)
        throw err;
    
    console.log("started");
})