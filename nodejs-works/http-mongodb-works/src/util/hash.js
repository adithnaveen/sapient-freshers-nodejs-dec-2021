const bcrypt = require('bcrypt');
const saltRounds = 10;
const yourPassword = "naveen";


bcrypt.genSalt(saltRounds, (err, salt) => {
    bcrypt.hash(yourPassword, salt, (err, hash) => {
        // Now we can store the password hash in db.
        if(err){
            console.log(err);
        }
        return hash; 
    });
});


bcrypt.compare(yourPassword, hash, function(err, res) {
    // if res == true, password matched
    // else wrong password
  });