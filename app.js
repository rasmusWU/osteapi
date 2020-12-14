require("dotenv").config();
var express = require("express");
var app = express();
var formidable = require("express-formidable");

require("./database");
app.use(formidable());

require("./cheese.route")(app);

app.listen(process.env.PORT || 3000, function() {
    console.log("App is running on port", process.env.PORT || 3000);
});
