var express = require('express');
var router = express.Router();
let proyectsController = require('../controllers/signin');

/* GET users listing. */
router.get('/signin', signinController.signin );


module.exports = router;
