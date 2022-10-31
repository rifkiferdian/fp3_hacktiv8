var express = require('express');
var router = express.Router();

const ProductController = require("../controllers/product.controller");
const authentication = require('../middlewares/authentication');
const authorizationCategory = require('../middlewares/category.authorization');

router.use(authentication, authorizationCategory);
router.post('/', ProductController.create)
router.get('/', ProductController.getAll)
router.put('/:productId', ProductController.updatePut);
router.patch('/:productId', ProductController.updatePatch);
router.delete('/:productId', ProductController.delete);

module.exports = router;