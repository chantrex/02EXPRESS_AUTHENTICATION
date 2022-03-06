let mongoose = require ('mongoose');


// CReate model class
let inventoryModel = mongoose.Schema(
    {
        fistName: String,
        lastName: String,
        password: String,
        },
    {
        collection:  "user"
    }
);

module.exports = mongoose.model('user', userModel);
