const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const path = require("path");

const staticPath = path.join(__dirname,"../public");
app.use(express.static(staticPath));

app.listen(port,()=>{
    console.log("Listening....");
})