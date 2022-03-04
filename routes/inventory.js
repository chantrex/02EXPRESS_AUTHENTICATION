let express = require('express');
let router = express.Router();
let inventoryController = require ('../controllers/inventory')


router.get('/list', inventoryController.list);

module.exports = router;