const User = require("../models/user.model.js");
const sql = require("../models/db");
// Create and Save a new User
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a User
  const users = new User({
    id : req.body.id,
    username : req.body.username,
    password : req.body.password,
    email : req.body.email,
    first_name : req.body.first_name,
    last_name : req.body.last_name
  });

  // Save user in the database
  User.create(users, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User."
      });
    else res.send(data);
  });
};

//get gall user
exports.findAll = (req, res) => {
  User.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving users."
        });
      else res.send(req);
    });
};

exports.login = (request, response) => {
  var username = request.body.username;
  var password = request.body.password;
  if (username && password) {
      sql.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
          // if (results.length > 0) {
          //     response.json(results);
          // } else {
          //     response.json({msg:'Incorrect Username and/or Password!'});
          // }			
          response.json(results);
          response.end();
      });
  } else {
      response.json({msg:'Please enter Username and Password!'});
       response.end();
  }
};