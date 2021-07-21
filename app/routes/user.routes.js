module.exports = app => {
    const users = require("../controllers/user.controller.js");
    const sql = require("../models/db");
    // Create a new User
    app.post("/users", users.create);

      // Retrieve all User
      app.get("/users", users.findAll);

      app.post('/user' , users.login);

    //   app.post('/user', function(request, response) {
          
    //    // response.json({msg:request.body});
    //     var username = request.body.username;
    //     var password = request.body.password;
    //     if (username && password) {
    //         sql.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
    //             if (results.length > 0) {
    //                 response.json({user:results});
    //             } else {
    //                 response.json({msg:'Incorrect Username and/or Password!'});
    //             }			
    //             response.end();
    //         });
    //     } else {
    //         response.json({msg:'Please enter Username and Password!'});
    //         response.end();
    //     }
    //   });

    
    // });
}
