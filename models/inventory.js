let mongoose = require ('mongoose');


// CReate model class
let inventoryModel = mongoose.Schema(
    {
        item: String,
        qty: Number,
        tags: [],
        size : {
            h: Number,
            w: Number,
            oum: String
        },
        status: String
    },
    {
        collection:  "inventory"
    }
);

module.exports = mongoose.model('inventory', inventoryModel);