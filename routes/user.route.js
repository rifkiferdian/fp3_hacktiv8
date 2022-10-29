var express = require('express');
var router = express.Router();

const UserController = require("../controllers/user.controller");
const authentication = require('../middlewares/authentication');
const authorization = require('../middlewares/user.authorization');

router.post('/register', UserController.register);
router.post('/login', UserController.login);

router.use(authentication);
router.patch('/topup', UserController.topup);
router.put('/:userId', authorization, UserController.update);
router.delete('/:userId', authorization, UserController.delete);

module.exports = router;