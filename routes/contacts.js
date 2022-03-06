let express = require('express');
let router = express.Router();
let contactsController = require ('../controllers/contacts')


router.get('/list', contactsController.list);


router.get('/add', contactsController.displayAddPage);

router.post('/add', contactsController.processAddPage);

// ROters for Edit
router.get('/edit/:id', contactsController.displayEditPage);
router.post('/edit/:id', contactsController.processEditPage);

router.get('/delete/:id', contactsController.performDelete);

module.exports = router;