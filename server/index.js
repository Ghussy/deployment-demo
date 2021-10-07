const express = require("express");
const path = require('path');

const app = express();

app.get("/", function(req,res) {
    res.sendFile(path.join(__dirname, "../index.html"))
})

const port = precess.env.PORT || 4545;

app.listen(4545, () => {
    console.log("Server is running port 4545")
})