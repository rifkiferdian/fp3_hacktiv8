var express = require('express');
var router = express.Router();

const CategoryController = require("../controllers/category.controller");
const authentication = require('../middlewares/authentication');
const authorizationCategory = require('../middlewares/category.authorization');

router.use(authentication, authorizationCategory);
router.post('/', CategoryController.create)
router.get('/', CategoryController.getCategories)
router.patch('/:categoryId', CategoryController.update);
router.delete('/:categoryId', CategoryController.delete);

module.exports = router;