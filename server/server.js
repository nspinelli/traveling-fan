const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();


app.use(bodyParser);
app.use(cors);

var port = process.env.PORT || 8080;

app.listen(port, ()=> {
    console.log(`Express Server is up and running on port ${port}`);
});