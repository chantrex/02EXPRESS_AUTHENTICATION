let express = require('express');
let router = express.Router();

let mongoose = require('mongoose');

let inventoryController = require ('../controllers/inventory')


/* GET Inventory  page. */
router.get('/list', inventoryController.list);

module.exports = router;