let express = require('express');
let router = express.Router();
let contactsController = require ('../controllers/contacts')


router.get('/list', contactsController.list);


router.get('/add', contactsController.displayAddPage);

router.post('/add', contactsController.displayAddPage);
module.exports = router;