var express = require('express');
var router = express.Router();
var OrderController = require('../controllers/OrderController.js');

router.get('/order', OrderController.list);
router.get('/order/:id', OrderController.show);
router.post('/', OrderController.create);
router.put('/:id', OrderController.update);
router.delete('/:id', OrderController.remove);

module.exports = router;
