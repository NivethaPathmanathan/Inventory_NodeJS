const express = require("express");
const bodyParser = require("body-parser");
var cors = require('cors');
//var authRouter = require('./app/routes/auth.routes');
const app = express();

app.use(cors());

app.get('/', cors(), (req, res) =>{
    res.json({
        message: 'Hello World'
    });
});

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// create a router of route file routes/auth.js
//app.use('./auth', authRouter);

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Inventory application." });
});

//include routes
require("./app/routes/product.routes.js")(app);
require("./app/routes/purchase.routes.js")(app);
require("./app/routes/sales.routes.js")(app);
require("./app/routes/user.routes.js")(app);

// set port, listen for requests
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});