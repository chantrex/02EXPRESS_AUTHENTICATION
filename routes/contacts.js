let express = require('express');
let router = express.Router();
let contactsController = require ('../controllers/contacts')


router.get('/list', contactsController.list);

module.exports = router;