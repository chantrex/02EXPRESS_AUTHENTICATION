let DB_CONNECTION = "mongodb+srv://dbadmin:Xl40x1p09Ks0PZFl@clusters002.4aqpr.mongodb.net/comp229002"

// Database Setup
let mongoose = require('mongoose');

module.exports = function() {

    // Conenct to the DB
    mongoose.connect(DB_CONNECTION);

    let mongoDB = mongoose.connection;
    
    mongoDB.on('error', console.error.bind(console, 'Connection Error: '));
    mongoDB.once('open', ()=>{
    console.log('Connected to MongoDb....');
    })
    return mongoDB;
}

