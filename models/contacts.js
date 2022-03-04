let mongoose = require ('mongoose');


// CReate model class
let contactsModel = mongoose.Schema(
    {
        name: String,
        phoneNumber: String,
        email: String
    },
    {
        collection:  "bussinesContacts"
    }
);

module.exports = mongoose.model('contacts', contactsModel);