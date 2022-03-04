let express = require('express');
let router = express.Router();
let inventoryController = require ('../controllers/inventory')


router.get('/contacts', inventoryController.list);

module.exports = router;