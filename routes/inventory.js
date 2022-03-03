let express = require('express');
let router = express.Router();

let mongoose = require('mongoose');
const inventory = require('../models/inventory');

let Inventory = require('../models/inventory');


/* GET Inventory  page. */
router.get('/list', function (req, res, next){
    Inventory.find((err, inventoryList) => {
        console.log(inventoryList);
        if(err)
        {
            return console.error(err);
        }
        else{
            console.log(inventoryList);
        }
    });

    res.render('index', { title: 'About' });
});

module.exports = router;