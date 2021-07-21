const sql = require("./db.js");

const User = function(users) {
    this.id = users.id;
    this.username = users.username;
    this.password = users.password;
    this.email = users.email;
    this.first_name = users.first_name;
    this.last_name = users.last_name;
    
  };
  
        User.create = (newUser, result) => {
            sql.query("INSERT INTO users SET ?", newUser, (err, res) => {
              if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
              }
          
              console.log("created users: ", { id: res.insertId, ...newUser });
              result(null, { id: res.insertId, ...newUser });
            });
          };

        
User.getAll = result => {
  sql.query("SELECT * FROM users", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("users: ", res);
    result(null, res);
  });
};

          
module.exports = User;
